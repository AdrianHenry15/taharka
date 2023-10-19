import asyncHandler from "express-async-handler";
import Reward from "../../models/RewardModel.js";

// Get a specific reward by ID
export const getRewardById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const reward = await Reward.findById(id);
    if (!reward) {
        return res.status(404).json({ error: "Reward not found" });
    }
    res.json(reward);
});