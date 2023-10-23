import asyncHandler from "express-async-handler"
import User from "../../models/UserModel.js"
import bcrypt from "bcryptjs"

// @description     UPDATE user profile
// route            PUT /api/users/profile
// @access          Private/ have to have a valid token
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    // Update user's profile fields if provided in the request
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber
    user.birthday = req.body.birthday || user.birthday

    // CHeck if a new password is provided
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save()

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
      birthday: updatedUser.birthday,
      message: "User Profile Updated",
    })
  } else if (!user) {
    res.status(404)
    throw new Error("User not found")
  }
})