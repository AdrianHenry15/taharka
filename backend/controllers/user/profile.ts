import asyncHandler from "express-async-handler"
import User from "../../models/UserModel"

// @description     GET user profile
// route            POST /api/users/profile
// @access          Private/ have to have a valid token
export const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.params.userId
  const user = await User.findById(userId)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      birthday: user.birthday,
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
  res.status(200).json(user)
})
