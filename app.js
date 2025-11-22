const { MongoClient } = require('mongodb');

// Replace with your MongoDB connection string
const uri = "mongodb+srv://Lidyalulseged:Ejigu.170606@cluster0.0c2vidt.mongodb.net/?appName=Cluster0"; 
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        // Specify your database and collection names
        const database = client.db("PersonalTaskManager"); // Replace with your desired database name
        const collection = database.collection("Tasks"); // Replace with your desired collection name

        // Insert sample data
        const sampleData = { name: "Example Task", completed: false };
        const result = await collection.insertOne(sampleData);
        console.log(`New listing created with id: ${result.insertedId}`);

        // Retrieve all tasks
        const tasks = await collection.find({}).toArray();
        console.log("Tasks:", tasks);

    } catch (err) {
        console.error("Connection error:", err);
    } finally {
        await client.close();
    }
}

// Run the function
run().catch(console.error);