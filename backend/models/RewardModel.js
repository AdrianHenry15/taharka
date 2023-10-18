import mongoose, { Schema } from "mongoose"

const RewardSchema = new Schema({
  name: String,
  points: {
    type: Number,
    required: true,
  },
  description: String,
})

export default mongoose.model("Reward", RewardSchema)
