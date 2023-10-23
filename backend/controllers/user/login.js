import asyncHandler from "express-async-handler"
import User from "../../models/UserModel.js"
import generateToken from "../../utils/generateToken.js"

// @description     Auth user/set token
// route            POST /api/users/auth
// @access          Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, phoneNumber, password } = req.body

  const user = await User.findOne({ $or: [{ email: email }, { phoneNumber: phoneNumber }] })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  } else {
    res.status(401);
    throw new Error("User not found")
  }
})
