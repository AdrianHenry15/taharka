import mongoose, { Schema } from "mongoose"

// interface IReward extends Document {
//   name: string
//   points: number
//   description: string
// }

const RewardSchema = new Schema({
  name: String,
  points: {
    type: Number,
    required: true,
  },
  description: String,
})

const Reward = mongoose.model("Reward", RewardSchema)

export default Reward
