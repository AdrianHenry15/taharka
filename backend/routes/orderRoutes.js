import express from 'express'
import { createOrder } from '../controllers/order/createOrder.js'
import { getAllOrders } from '../controllers/order/getAllOrders.js'
import { getOrderById } from '../controllers/order/getOrderById.js'
import { updateOrder } from '../controllers/order/updateOrder.js'
import { deleteOrder } from '../controllers/order/deleteOrder.js'
import { getOrderByStatus } from '../controllers/order/getOrderByStatus.js'

const router = express.Router()

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.get('/status', getOrderByStatus);
router.put('/:id', updateOrder)
router.delete('/:id', deleteOrder)

export default router
