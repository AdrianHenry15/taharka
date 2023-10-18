import mongoose, { Schema } from "mongoose"

const CartItemSchema = new Schema({
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
    default: "Not Processed",
    enum: ["Not Processed",
      "Processing",
      "Shipped",
      "Delivered",
      "CANCELED",
    ],
    required: true,
  },
})

const CartSchema = new Schema({
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

export default mongoose.model("Cart", CartSchema)
