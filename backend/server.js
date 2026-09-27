// Import Express framework
import express from "express";
import userRouter from "./routers/userRoutes.js";
// Load environment variables from .env file
import "dotenv/config";

// Import CORS to allow frontend and backend communication
import cors from "cors";

// Import HTTP module to create a server
import http from "http";

// Import MongoDB connection function
import { connectDB } from "./lib/db.js";
//import cloudinary from "./lib/cloudinary.js";

// Import message router for handling message-related routes
import messageRouter from "./routers/messageRoutes.js";

import {Server} from "socket.io";

// Create Express application
const app = express();

// Create HTTP server using Express app
const server = http.createServer(app);

//Initialize socket.io server
export const io = new Server(server,{
  cors:{origin:"*"}
})

//Store online users
export const userSocketMap = {};//{userId:socketId}

//Socket.io connection handler
io.on("connection",(socket)=>{
  const userId=socket.handshake.query.userId;
  console.log("User Connected",userId)
  if(userId) userSocketMap[userId] = socket.id

  //emit online users to all connected clients
  io.emit("getOnlineUsers",Object.keys(userSocketMap))

  socket.on("disconnect",()=>{
    console.log("User Disconnected",userId)
    if(userId) delete userSocketMap[userId]
    io.emit("getOnlineUsers",Object.keys(userSocketMap))
  })
})

// Middleware setup

// Allow Express to read JSON data from requests
// 50mb is the maximum JSON request size
app.use(express.json({ limit: "50mb" }));

// Enable CORS for frontend-backend communication
app.use(cors());

//Routes setup
// Create a status route
// When /api/status is visited, it sends "Server is running"
app.use("/api/status", (req, res) => {
  res.send("Server is running");
});
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// Get PORT from .env
// If PORT is not available, use 5000

// Connect to MongoDB
await connectDB();


if (process.env.VERCEL !== "1") {
  
  const PORT = process.env.PORT || 5000;
  // Start the server and listen for requests
  server.listen(PORT, () => {
    // Print server running message
    console.log(`Server is running on port ${PORT}`);
  });


}
export default server;

/* import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
//create express app and http server
const app = express();
const server = http.createServer(app);

//middleware setup
//Used to register middleware or routes.
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/api/status", (req, res) => {
  res.send("Server is running");
});
const PORT = process.env.PORT || 5000;

//connect to the mongodb
await connectDB();

//listen:Used to start the Express server and listen for incoming requests.
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 */
