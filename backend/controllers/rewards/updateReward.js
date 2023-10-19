import asyncHandler from "express-async-handler";
import Reward from "../../models/RewardModel.js";

// Update an existing reward
export const updateReward = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, points, description } = req.body;

    const reward = await Reward.findByIdAndUpdate(id, { name, points, description }, { new: true });
    if (!reward) {
        return res.status(404).json({ error: "Reward not found" });
    }
    res.json(reward);
});