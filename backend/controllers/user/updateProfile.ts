import asyncHandler from "express-async-handler"
import User from "../../models/UserModel"

// @description     UPDATE user profile
// route            PUT /api/users/profile
// @access          Private/ have to have a valid token
export const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)

    if (user) {
      // Update user's profile fields if provided in the request
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.phone = req.body.phone || user.phone
      user.birthday = req.body.birthday || user.birthday

      const updatedUser = await user.save()

      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        birthday: updatedUser.birthday,
        message: "User Profile Updated",
      })
    } else if (!user) {
      res.status(404)
      throw new Error("User not found")
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})
