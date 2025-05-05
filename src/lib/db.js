const { MongoClient, ServerApiVersion } = require("mongodb");

if (!process.env.DB_URI) {
  throw new Error("DB_URI is not set in the environment variables");
}

const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getDB(dbName) {
  try {
    await client.connect();
    console.log("Connected to the database");

    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw new Error("Database connection failed");
  }
}

export async function getCollection(collectionName){
    const db = await getDB("TestDB");
    if(db) return db.collection(collectionName);
    return null;
}
