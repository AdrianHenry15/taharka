import mongoose, { Schema } from "mongoose"

const LocationSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
})

const Location = mongoose.model("Location", LocationSchema)

export default Location
