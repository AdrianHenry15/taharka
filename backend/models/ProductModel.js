import mongoose, { Schema } from "mongoose"

// Product Schema
const ProductSchema = new Schema({
  devId: Number,
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
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// format createdAt date
ProductSchema.virtual("createdAtFormatted").get(function () {
  return date.format(this.createdAt, "dddd MMM DD, YYYY")
})

export default mongoose.model("Product", ProductSchema)
