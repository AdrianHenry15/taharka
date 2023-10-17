import mongoose, { Schema } from "mongoose"

// interface IProduct extends Document {
//   sku: string
//   name: string
//   slug: string
//   imageUrl: string
//   imageKey: string
//   description: string
//   quantity: number
//   price: number
//   taxable: boolean
//   isActive: boolean
//   updated: Date
//   created: Date
// }

// Product Schema
const ProductSchema = new Schema({
  sku: {
    type: String,
  },
  name: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
  imageUrl: {
    type: String,
  },
  imageKey: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  taxable: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model("Product", ProductSchema)
