// ─────────────────────────────────────────────
//  js/sheetMusic.js  —  VexFlow 4 sheet music renderer
//
//  Each chord label is a unique instance with its own spanId.
//  Clicking a label highlights ONLY the notes in that exact span,
//  not every note belonging to that chord name throughout the song.
// ─────────────────────────────────────────────

const CHORD_DEFAULT  = "#8b7aaa";
const CHORD_ACTIVE   = "#4a3570";
const NOTE_ACTIVE    = "#8b7aaa";

function renderSheetMusic(song) {
  const container = document.getElementById("sheet-music-container");
  if (!container) return;

  if (!song.sheetMusic) {
    container.innerHTML = `<p class="sheet-loading">No sheet music available for this song.</p>`;
    return;
  }
  if (typeof Vex === "undefined") {
    container.innerHTML = `<p class="sheet-loading" style="color:#c0392b;">
      VexFlow failed to load — check your internet connection and refresh.</p>`;
    return;
  }

  container.innerHTML = "";
  const { clef, timeSignature, measures } = song.sheetMusic;

  try {
    const { Renderer, Stave, StaveNote, Voice, Formatter, Annotation } = Vex.Flow;

    // ── Layout ────────────────────────────────────
    const BARS_PER_ROW = 4;
    const BAR_WIDTH    = 200;
    const ROW_HEIGHT   = 158;
    const STAVE_TOP    = 42;
    const MARGIN_L     = 10;
    const MARGIN_T     = 8;

    const totalRows = Math.ceil(measures.length / BARS_PER_ROW);
    const W = MARGIN_L + BAR_WIDTH * BARS_PER_ROW + 10;
    const H = MARGIN_T + ROW_HEIGHT * totalRows + 20;

    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(W, H);
    const ctx = renderer.getContext();

    // ── Step 1: assign a unique spanId to every note ──────────────
    // Walk all notes in order. Every time a chord marker appears,
    // increment the spanId counter — that instance gets a new unique id.
    // Notes carry that spanId until the next chord marker.
    //
    // Example for Twinkle:
    //   Bar1: C(spanId:0) → notes get spanId 0
    //   Bar2: F(spanId:1) → notes get spanId 1
    //         C(spanId:2) → note  gets spanId 2    ← different C!
    //   Bar3: F(spanId:3) → notes get spanId 3
    //   ...
    // ─────────────────────────────────────────────────────────────
    let spanCounter = -1;
    const measuresTagged = measures.map(bar =>
      bar.map(n => {
        if (n.chord) spanCounter++; // new chord marker = new span
        return { ...n, spanId: spanCounter };
      })
    );

    // ── Step 2: render staves + notes ────────────
    const pendingChordLabels = []; // { chord, spanId, x, y }
    const allNoteElements    = []; // { svgEl, spanId, chord }

    for (let row = 0; row < totalRows; row++) {
      const rowMeasures = measuresTagged.slice(row * BARS_PER_ROW, (row + 1) * BARS_PER_ROW);
      const staveY = MARGIN_T + row * ROW_HEIGHT + STAVE_TOP;
      const builtBars = [];

      rowMeasures.forEach((bar, col) => {
        const staveX  = MARGIN_L + col * BAR_WIDTH;
        const isFirst = col === 0;

        const stave = new Stave(staveX, staveY, BAR_WIDTH);
        if (row === 0 && isFirst) stave.addClef(clef).addTimeSignature(timeSignature);
        else if (isFirst)         stave.addClef(clef);
        stave.setContext(ctx).draw();

        const notes = bar.map(n => {
          const sn = new StaveNote({ keys: [n.key], duration: n.dur });
          if (n.lyric) {
            const ann = new Annotation(n.lyric);
            ann.setVerticalJustification(Annotation.VerticalJustify.BOTTOM);
            sn.addModifier(ann, 0);
          }
          return sn;
        });

        const voice = new Voice({ num_beats: 4, beat_value: 4 });
        voice.setMode(Voice.Mode.SOFT);
        voice.addTickables(notes);

        new Formatter()
          .joinVoices([voice])
          .format([voice], stave.getWidth() - (isFirst ? 62 : 28));

        voice.draw(ctx, stave);
        builtBars.push({ notes, bar });
      });

      // Collect chord labels + tag note SVG elements with their spanId
      builtBars.forEach(({ notes, bar }) => {
        bar.forEach((n, i) => {
          // Chord label — only where a chord marker exists
          if (n.chord) {
            pendingChordLabels.push({
              chord:  n.chord,
              spanId: n.spanId,
              x:      notes[i].getAbsoluteX() - 4,
              y:      staveY - 14,
            });
          }

          // Tag the note's SVG element with its spanId
          const svgEl = notes[i].getSVGElement ? notes[i].getSVGElement() : null;
          if (svgEl) {
            svgEl.setAttribute("data-span-id", n.spanId);
            svgEl.setAttribute("data-chord",   n.spanId !== undefined ? (n.chord || "") : "");
            allNoteElements.push({ svgEl, spanId: n.spanId, chord: n.chord });
          }
        });
      });
    }

    // ── Step 3: inject SVG styles + clickable labels ──
    const svg = container.querySelector("svg");
    if (!svg) return;

    const styleEl = document.createElementNS("http://www.w3.org/2000/svg", "style");
    styleEl.textContent = `
      .sheet-chord-label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        font-weight: bold;
        fill: ${CHORD_DEFAULT};
        cursor: pointer;
        user-select: none;
        transition: fill 0.15s;
      }
      .sheet-chord-label:hover { fill: ${CHORD_ACTIVE}; }
      .sheet-chord-label.active { fill: ${CHORD_ACTIVE}; }
      .note-active path  { fill: ${NOTE_ACTIVE} !important; stroke: ${NOTE_ACTIVE} !important; }
      .note-active rect  { fill: ${NOTE_ACTIVE} !important; }
    `;
    svg.insertBefore(styleEl, svg.firstChild);

    pendingChordLabels.forEach(({ chord, spanId, x, y }) => {
      const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textEl.setAttribute("x", x);
      textEl.setAttribute("y", y);
      textEl.setAttribute("class", "sheet-chord-label");
      textEl.setAttribute("data-chord",   chord);
      textEl.setAttribute("data-span-id", spanId);
      textEl.textContent = chord;

      textEl.addEventListener("click", () => {
        // Clear all active labels + notes first
        svg.querySelectorAll(".sheet-chord-label").forEach(el => el.classList.remove("active"));
        allNoteElements.forEach(({ svgEl }) => svgEl.classList.remove("note-active"));

        // Activate only THIS label instance
        textEl.classList.add("active");

        // Highlight only notes belonging to THIS spanId
        allNoteElements.forEach(({ svgEl, spanId: nSpanId }) => {
          if (nSpanId === spanId) svgEl.classList.add("note-active");
        });

        // Update chord diagram + lyrics highlights + pills
        selectChord(chord);
      });

      svg.appendChild(textEl);
    });

    svg.style.maxWidth = W + "px";
    svg.style.width    = "100%";
    svg.style.height   = "auto";

  } catch (err) {
    console.error("Sheet music render error:", err);
    container.innerHTML = `
      <p class="sheet-loading" style="color:#c0392b;">
        Sheet music failed to render — open F12 console for details.
      </p>
      <p class="sheet-loading" style="font-size:0.72rem;margin-top:4px;">${err.message}</p>`;
  }
}

// ── Called from song.js when chord selected from lyrics/pills ──
// Highlights ALL instances of that chord name on the sheet (since
// we don't know which span the user means from the lyrics side)
function syncSheetChordHighlight(chordName) {
  const svg = document.querySelector("#sheet-music-container svg");
  if (!svg) return;

  // Clear everything
  svg.querySelectorAll(".sheet-chord-label").forEach(el => el.classList.remove("active"));
  svg.querySelectorAll("[data-span-id]").forEach(el => el.classList.remove("note-active"));

  // Highlight all labels + notes matching this chord name
  svg.querySelectorAll(`.sheet-chord-label[data-chord="${chordName}"]`).forEach(el => {
    el.classList.add("active");
    const spanId = el.getAttribute("data-span-id");
    svg.querySelectorAll(`[data-span-id="${spanId}"]`).forEach(noteEl => {
      if (noteEl.tagName !== "text") noteEl.classList.add("note-active");
    });
  });
}