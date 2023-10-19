import asyncHandler from 'express-async-handler'
import Order from '../../models/OrderModel.js'

export const getOrderByStatus = asyncHandler(async (req, res) => {
    const { status } = req.query;

    // Define an array of valid order statuses
    const validStatuses = ["Not Processed", "Processing", "Shipped", "Delivered", "Cancelled"]

    // Check if the provided status is valid.
    // If not, return a validation error.
    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: "Invalid status value" });
    }

    try {
        // Query orders based on the status if provided. If no status is provided, return all orders.
        const query = status ? { status } : {};
        const orders = await Order.find(query).populate('cart').populate('user');
        res.json(orders);
    } catch (error) {
        throw new Error("Internal Server Error")
    }
})