import asyncHandler from 'express-async-handler'; // Assuming you have express-async-handler installed
import Order from '../../models/OrderModel.js';

// Delete an order by ID
export const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndRemove(req.params.id);
    if (!order) {
        res.status(404).json({ error: 'Order not found' });
    } else {
        res.json({ message: 'Order deleted successfully' });
    }
});