import mongoose, { Schema } from "mongoose"

const OrderSchema = new Schema({
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "Not Processed",
    enum: ["Not Processed",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ],
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

// format createdAt date
OrderSchema.virtual("createdAtFormatted").get(function () {
  return date.format(this.createdAt, "dddd MMM DD, YYYY")
})

export default mongoose.model("Order", OrderSchema)
