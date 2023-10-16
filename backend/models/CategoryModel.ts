import mongoose, { Schema, Document } from "mongoose"

interface ICategory extends Document {
  _id: Schema.Types.ObjectId
  name: string
  products: Schema.Types.ObjectId
}

const CategorySchema = new Schema<ICategory>({
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

export default mongoose.model<ICategory>("Category", CategorySchema)
