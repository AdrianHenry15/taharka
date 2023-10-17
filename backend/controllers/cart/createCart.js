import Cart from '../../models/CartModel.js'
import asyncHandler from "express-async-handler"

export const createCart = asyncHandler(async (req, res) => {
    try {
        const { user, products } = req.body;
        const cart = new Cart({ user, products });
        await cart.save();
        return res.status(201).json(cart);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating a cart' });
    }
})