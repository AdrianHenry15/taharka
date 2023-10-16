import mongoose, { Schema, model } from "mongoose"
import date from "date-and-time"

interface IReview {
  image: string
  text: string
  author: mongoose.Types.ObjectId
  likes: mongoose.Types.ObjectId[]
  dislikes: mongoose.Types.ObjectId[]
  createdAt: Date
}

const reviewSchema = new mongoose.Schema<IReview>(
  {
    image: {
      type: String,
      trim: true,
    },
    text: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
)

// likes count
reviewSchema.virtual("likeCount").get(function () {
  return this.likes.length
})

// format createdAt date
reviewSchema.virtual("createdAtFormatted").get(function (this: IReview) {
  return date.format(this.createdAt, "dddd MMM DD, YYYY")
})

const Review = mongoose.model<IReview>("User", reviewSchema)

export default Review
