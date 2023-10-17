import express from "express"
import { registerUser } from "../controllers/user/register.js"
import { loginUser } from "../controllers/user/login.js"
import { logoutUser } from "../controllers/user/logout.js"
import { getUserProfile } from "../controllers/user/profile.js"
import { updateUserProfile } from "../controllers/user/updateProfile.js"
import { protect } from "../middleware/authMiddleware.js"
import { deleteUser } from "../controllers/user/deleteUser.js"
const router = express.Router()

router.post("/", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  .delete(protect, deleteUser)

export default router
