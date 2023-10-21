import asyncHandler from "express-async-handler"
import User from "../../models/UserModel.js"
import generateToken from "../../utils/generateToken.js"
import bcrypt from "bcryptjs"

// @description     Auth user/set token
// route            POST /api/users/auth
// @access          Public
export const loginUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body

  const user = await User.findOne({ name: name, $or: [{ email }, { phone }] })

  if (user) {
    // Check if the provided password matches the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      generateToken(res, user._id)

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      })
    } else {
      res.status(401)
      throw new Error("Invalid password")
    }
  } else {
    res.status(401);
    throw new Error("User not found")
  }
})
