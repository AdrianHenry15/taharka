import dotenv from 'dotenv'
dotenv.config()
import asyncHandler from "express-async-handler"
import twilio from "twilio"

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Send the phone verification code
export const sendPhoneVerification = asyncHandler(async (req, res) => {
    const user = req.user;

    try {
        const verificationCode = await user.sendPhoneVerification(); // Trigger the sendPhoneverification method

        // Send the verification code via SMS (use your SMS service)
        await client.messages.create({
            body: `Taharka verification code: ${verificationCode} (NEVER SHARE THIS CODE)`,
            from: twilioPhoneNumber,
            to: user.phone, // User's phone number
        });

        res.status(200).json({ message: "Verification code sent successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send verification code." })
    }
});

// Verify the phone using the verification code
export const verifyPhone = asyncHandler(async (req, res) => {
    const { verificationCode } = req.body;
    const user = req.user; // Assuming you have authenticated the user

    if (!user.phoneVerificationCode || user.phoneVerificationCode !== verificationCode) {
        return res.status(400).json({ error: "Invalid verification code." })
    }

    if (user.phoneVerificationExpiry < new Date()) {
        return res.status(400).json({ error: "Expired verification code." })
    }

    user.isVerified = true;
    user.phoneVerificationCode = undefined;
    user.phoneVerificationExpiry = undefined;
    await user.save();

    res.status(200).json({ message: "Phone verified successfully" })
})