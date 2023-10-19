import asyncHandler from 'express-async-handler'; // Assuming you have express-async-handler installed
import Order from '../../models/OrderModel.js';

// Create a new order
export const createOrder = asyncHandler(async (req, res) => {
    const { cart, user, total } = req.body;
    const order = new Order({ cart, user, total });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
});