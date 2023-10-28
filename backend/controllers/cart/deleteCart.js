import Cart from '../../models/CartModel.js'
import asyncHandler from "express-async-handler"

export const deleteCart = asyncHandler(async (req, res) => {
    const cartId = req.params.cartId;

    // Find and delete the cart by id
    const deletedCart = await Cart.findByIdAndDelete(cartId);

    if (!deletedCart) {
        // if the cart with the given ID doesn't exist, return a 404 Not Found response
        res.status(404).json({ message: "Cart not found" });
    } else {
        // if the cart was successfully deleted, return a 204 No Content response
        res.status(204).send();
    }
})