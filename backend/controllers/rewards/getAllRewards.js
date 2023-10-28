import asyncHandler from "express-async-handler";
import Reward from "../../models/RewardModel.js";

// Get a specific reward by ID
export const getAllRewards = asyncHandler(async (req, res) => {
    const reward = await Reward.find();

    if (!reward) {
        return res.status(404).json({ error: "Reward not found" });
    }
    res.json(reward);
});