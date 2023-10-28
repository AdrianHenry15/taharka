import Cart from '../../models/CartModel.js'
import asyncHandler from "express-async-handler"

export const getCartById = asyncHandler(async (req, res) => {
    const cartId = req.params.cartId;
    // Query the database to retreive the cart by ID
    const cart = await Cart.findById(cartId);

    if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
    }
    return res.status(200).json(cart);
})