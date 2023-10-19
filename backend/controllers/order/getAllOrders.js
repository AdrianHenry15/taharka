import asyncHandler from 'express-async-handler'; // Assuming you have express-async-handler installed
import Order from '../../models/OrderModel.js';

// Get a list of all orders
export const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find().populate('cart').populate('user');
    res.json(orders);
});