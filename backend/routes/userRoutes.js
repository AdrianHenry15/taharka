import express from "express"
import { registerUser } from "../controllers/user/register.js"
import { loginUser } from "../controllers/user/login.js"
import { logoutUser } from "../controllers/user/logout.js"
import { getUserProfile } from "../controllers/user/getUserProfile.js"
import { updateUserProfile } from "../controllers/user/updateProfile.js"
import { protect } from "../middleware/authMiddleware.js"
import { deleteUser } from "../controllers/user/deleteUser.js"
import { getAllUsers } from "../controllers/user/getAllProfiles.js"
import { verifyEmail } from "../controllers/user/verifyEmail.js"
import { sendPhoneVerification, verifyPhone } from "../controllers/user/verifyPhone.js"
const router = express.Router()

router.post("/", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.get("/", getAllUsers)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  .delete(protect, deleteUser)

// Email and phone verification routes
// router.get("/login/verify-email/:verificationCode", verifyEmail)
// router.post("/phone/send-verification", sendPhoneVerification)
// router.post("/phone/verify", verifyPhone)

export default router
