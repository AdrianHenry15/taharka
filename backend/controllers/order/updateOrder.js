import asyncHandler from 'express-async-handler'; // Assuming you have express-async-handler installed
import Order from '../../models/OrderModel.js';

// Update an existing order
export const updateOrder = asyncHandler(async (req, res) => {
    const { cart, user, total, status } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
        order.status = status
        order.cart = cart;
        order.user = user;
        order.total = total;
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404).json({ error: 'Order not found' });
    }
});