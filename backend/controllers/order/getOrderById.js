import asyncHandler from 'express-async-handler'; // Assuming you have express-async-handler installed
import Order from '../../models/OrderModel.js';

// Get a specific order by ID
export const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('cart').populate('user');
    if (!order) {
        res.status(404).json({ error: 'Order not found' });
    } else {
        res.json(order);
    }
});