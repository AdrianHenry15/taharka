import asyncHandler from "express-async-handler";
import Reward from "../../models/RewardModel.js";

// Create a new reward
export const createReward = asyncHandler(async (req, res) => {
    const { name, points, description } = req.body;

    // Check if a reward with the same name already exists
    const existingReward = await Reward.findOne({ name })

    if (existingReward) {
        return res.status(400).json({ error: "Reward wth the same name already exists" })
    }

    const newReward = new Reward({ name, points, description });
    const savedReward = await newReward.save();
    res.status(201).json(savedReward);
});