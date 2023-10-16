import mongoose, { Schema, Document } from "mongoose"

interface IReward extends Document {
  name: string
  points: number
  description: string
}

const RewardSchema = new Schema<IReward>({
  name: String,
  points: {
    type: Number,
    required: true,
  },
  description: String,
})

const Reward = mongoose.model<IReward>("Reward", RewardSchema)

export default Reward
