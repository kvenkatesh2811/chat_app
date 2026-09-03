import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  getMessages,
  getUsersForSiderbar,
  markMessageAsSeen,
  sendMessage,
} from "../controllers/messageController.js";
const messageRouter = express.Router();
messageRouter.get("/users", protectRoute, getUsersForSiderbar);
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen);
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.post("/send/:id", protectRoute, sendMessage);

export default messageRouter;
