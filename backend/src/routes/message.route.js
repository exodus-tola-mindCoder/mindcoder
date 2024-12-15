import express from "express";
import { protectRoute, } from "../middleware/auth.middleware.js";

import { getUsersForSidebar, getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessage);
router.post("/send", protectRoute, sendMessage);



export default router;