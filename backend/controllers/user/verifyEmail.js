import User from '../../models/UserModel.js'
import asyncHandler from "express-async-handler"

// Verify the email using the verification code
export const verifyEmail = asyncHandler(async (req, res) => {
    const verificationCode = req.params.verificationCode;

    // Find the user with the matching email verification code
    const user = await User.findOne({ emailVerificationCode: verificationCode })

    if (!user) {
        // Handle invalid or expired verification code
        return res.status(400).json({ error: "Invalid or expired verification code." })
    }

    // Check if the verification code is still valid (not expired)
    if (user.emailVerificationExpiry < new Date()) {
        // Handle expired verification code
        return res.status(400).json({ error: "Expired verification code." });
    }

    // Update the user's email verification status
    user.isVerified = true;
    user.emailVerificationCode = undefined;
    user.emailVerificationExpiry = undefined;

    await user.save();

    // Redirect or respond with a success message
    res.status(200).json({ message: "Email verified successfully." });
})