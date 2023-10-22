import asyncHandler from "express-async-handler"
import User from "../../models/UserModel.js"
import generateToken from "../../utils/generateToken.js"
import bcrypt from 'bcryptjs'

// USER REGISTRATION
// @description     Register a new user
// route            POST /api/users
// @access          Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body

  // Check if the user with provided email or phone number already exists
  const existingUser = await User.findOne({
    $or: [{ email }, { phone }],
  })

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" })
  }

  // Create new user document with name, phone, and/or email
  const user = await User.create({
    name, password, $or: [{ email }, { phone }]
  })

  if (user) {
    generateToken(res, user._id)

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data")
  }
})
