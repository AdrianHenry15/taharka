import express from "express"
import {} from "../controllers/user/userController.js"
import { protect } from "../middleware/authMiddleware.js"
const router = express.Router()

export default router
