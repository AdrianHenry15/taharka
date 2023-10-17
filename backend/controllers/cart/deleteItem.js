import Cart from '../../models/CartModel.js'
import asyncHandler from "express-async-handler"

export const deleteItem = asyncHandler(async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const cart = await Cart.findByIdAndDelete(cartId);
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        return res.status(204).send(); // No content on successful deletion
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting cart' });
    }
})