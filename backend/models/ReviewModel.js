import mongoose, { Schema } from "mongoose"
import date from "date-and-time"

const ReviewSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product"
    },
    isPurchaseVerified: {
      type: Boolean,
      default: trim
    },
    text: {
      type: String,
      trim: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    rating: {
      type: Number,
      required: true
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

// likes count
ReviewSchema.virtual("likeCount").get(function () {
  return this.likes.length
})

// format createdAt date
ReviewSchema.virtual("createdAtFormatted").get(function () {
  return date.format(this.createdAt, "dddd MMM DD, YYYY")
})

export default mongoose.model("Review", ReviewSchema)
