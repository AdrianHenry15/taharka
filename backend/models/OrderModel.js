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
  updated: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model("Order", OrderSchema)
