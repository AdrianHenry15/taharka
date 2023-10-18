import asyncHandler from 'express-async-handler';
import Cart from '../../models/CartModel.js';
import Order from '../../models/OrderModel.js';

export const checkoutCart = asyncHandler(async (req, res) => {
    const cartId = req.params.cartId;

    // Fetch the cart by ID
    const cart = await Cart.findById(cartId);

    if (!cart) {
        res.status(404).json({ message: 'Cart not found' });
        return;
    }

    // Calculate the total price of the items in the cart
    let totalPrice = 0;
    for (const cartItem of cart.products) {
        // Calculate the price for each item in the cart
        const itemPrice = cartItem.quantity * cartItem.price;
        totalPrice += itemPrice;
    }

    // You can perform additional business logic here, like creating an order
    // and updating the cart's status

    // Create an order based on the cart content
    const order = new Order({
        user: cart.user,
        items: cart.products,
        totalPrice,
    });

    // Save the order
    await order.save();

    // Mark the cart as checked out or perform any other necessary updates

    // Return a success response
    res.status(200).json({ message: 'Cart checked out successfully', order });
});
