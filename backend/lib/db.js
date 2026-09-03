import mongoose from "mongoose";

// Connect to the MongoDB database using Mongoose
export const connectDB = async () => {
  try {

    // Connect to MongoDB using the URL from .env
    // "chat-app" is the database name
    await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`);
    // Print success message if connection is successful
    console.log("MongoDB Connected");
  } catch (error) {
     // Print error message if connection fails
    console.error("MongoDB Error:", error.message);

    // Stop the server if MongoDB connection fails
    process.exit(1);
  }
};

/* export const connectDB = async () => {
  const uri = process.env.MONGODB_URL;

  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    await mongoose.connect(`${uri}/chat-app`);
  } catch (error) {
    console.log(error);
  }
}; */
/*   const uri = process.env.MONGODB_URL;
  if (!uri) {
    throw new Error("MONGODB_URL environment variable is not set");
  }

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });

  // Let errors bubble up so callers can handle them
  await mongoose.connect(`${uri}/chat-app`);
}; */
