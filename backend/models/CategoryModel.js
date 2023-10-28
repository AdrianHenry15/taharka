import mongoose, { Schema } from "mongoose"

const CategorySchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    trim: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
})

export default mongoose.model("Category", CategorySchema)
