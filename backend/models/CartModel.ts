import mongoose, { Schema, Types, Document } from "mongoose"
import { CartStatus } from "../constants"

interface ICartItem extends Document {
  product: Types.ObjectId[]
  quantity: number
  price: number
  tax: number
  priceWithTax: number
  status: string
}

interface ICart extends Document {
  products: [ICartItem]
  user: Types.ObjectId
  updated: Date
  created: Date
}

const CartItemSchema = new Schema<ICartItem>({
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  tax: {
    type: Number,
    default: 0,
    required: true,
  },
  priceWithTax: {
    type: Number,
    default: 0,
    required: true,
  },
  status: {
    type: String,
    default: CartStatus.NOT_PROCESSED,
    enum: [
      CartStatus.NOT_PROCESSED,
      CartStatus.PROCESSING,
      CartStatus.SHIPPED,
      CartStatus.DELIVERED,
      CartStatus.CANCELLED,
    ],
    required: true,
  },
})

const CartSchema = new Schema<ICart>({
  products: [CartItemSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
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

export default mongoose.model<ICart>("Cart", CartSchema)
