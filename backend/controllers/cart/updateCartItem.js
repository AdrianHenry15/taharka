import Cart from '../../models/CartModel.js'
import asyncHandler from "express-async-handler"

export const updateCartItem = asyncHandler(async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const { products } = req.body;
        const cart = await Cart.findByIdAndUpdate(cartId, { products }, { new: true });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ error: 'Error updating cart' });
    }
})