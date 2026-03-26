// purpose: connecting the project to the mongodb server

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI; // when we get the API key we can change the name here
// MONGO_URI goes into the env / git ignore

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongo() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  try {
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB ping failed:", err);
    throw err;
  }
  return client;
}

module.exports = { connectToMongo, client };