import express from 'express'
import { createReward } from '../controllers/rewards/createReward.js'
import { getAllRewards } from '../controllers/rewards/getAllRewards.js'
import { getRewardById } from '../controllers/rewards/getRewardById.js'
import { updateReward } from '../controllers/rewards/updateReward.js'
import { deleteReward } from '../controllers/rewards/deleteReward.js'

const router = express.Router()

router.post('/', createReward);
router.get('/', getAllRewards);
router.get('/:id', getRewardById);
router.put('/:id', updateReward)
router.delete('/:id', deleteReward)

export default router
