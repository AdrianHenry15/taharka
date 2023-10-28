import asyncHandler from "express-async-handler";
import Reward from "../../models/RewardModel.js";

// Delete a reward by ID
export const deleteReward = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reward = await Reward.findByIdAndRemove(id);

    if (!reward) {
        return res.status(404).json({ error: "Reward not found" });
    }
    res.json({ message: "Reward deleted successfully" });
});