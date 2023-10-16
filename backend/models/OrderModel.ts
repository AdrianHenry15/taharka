import mongoose, { Schema, Types, Document } from "mongoose"

interface IOrder extends Document {
  cart: Types.ObjectId
  user: Types.ObjectId
  total: number
  updated: Date
  created: Date
}

const OrderSchema = new Schema<IOrder>({
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

export default mongoose.model<IOrder>("Order", OrderSchema)
