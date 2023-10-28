import Cart from '../../models/CartModel.js'
import asyncHandler from "express-async-handler"

export const createCart = asyncHandler(async (req, res) => {
    const { userId, products } = req.body;

    // Validate the input and perform any necessary data manipulation
    // Create a new cart record and associate it with the user
    const newCart = await Cart.create({ user: userId, products });
    res.status(201).json(newCart);
})