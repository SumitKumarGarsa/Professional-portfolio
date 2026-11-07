import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    console.log("[MongoDB] Using existing database connection");
    return;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn(
      "[MongoDB] Warning: MONGODB_URI not found in environment. Running in mock/in-memory mode for contact inquiries."
    );
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    isConnected = !!conn.connections[0].readyState;
    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}`);
  } catch (error) {
    console.error("[MongoDB] Connection Error:", error.message);
    // Don't crash process in dev mode; allow fallback graceful operation
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }
  }
}

// Graceful disconnection on process termination
process.on("SIGINT", async () => {
  if (isConnected) {
    await mongoose.connection.close();
    console.log("[MongoDB] Connection closed due to application termination");
    process.exit(0);
  }
});
