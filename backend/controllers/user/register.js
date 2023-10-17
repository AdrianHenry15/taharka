import asyncHandler from "express-async-handler"
import User from "../../models/UserModel.js"
import generateToken from "../../utils/generateToken.js"

// USER REGISTRATION
// @description     Register a new user
// route            POST /api/users
// @access          Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body

  try {
    // Check if the user with provided email or phone number already exists
    const existingUser = await User.findOne({
      name: name,
      $or: [{ email }, { phone }],
    })

    if (existingUser) {
      res.status(400).json({ message: "User already exists" })
      return
    }

    // Create new user document with name, phone, and/or email
    const newUser = await User.create({ name, $or: [{ email }, { phone }] })

    // Save the user to the database
    await newUser.save()

    // Generate and send a token
    generateToken(res, newUser._id)

    res.status(201).json({ user: newUser })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Registration failed" })
  }
})
