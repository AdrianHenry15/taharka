import Cart from '../../models/CartModel.js'
import Product from '../../models/ProductModel.js'
import asyncHandler from "express-async-handler"

export const addItemToCart = asyncHandler(async (req, res) => {
    const cartId = req.params.cartId;
    const { productId, quantity } = req.body;

    // Fetch the cart by ID and update its products array with the new item
    const cart = await Cart.findById(cartId);

    if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
    }
    try {
        // Fetch the product's price and tax from the Product model
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        const productPrice = product.price;
        const productTax = product.taxable;

        // Calculate the price and price with tax for the current item
        const itemPrice = productPrice * quantity;
        const itemPriceWithTax = itemPrice + itemPrice * (productTax / 100);

        // Update the cart's products array with the new item
        cart.products.push({
            product: productId,
            quantity,
            price: itemPrice,
            tax: itemPriceWithTax - itemPrice,
            priceWithTax: itemPriceWithTax,
        });

        // Update the cart's total price and total tax
        cart.totalPrice += itemPrice;
        cart.totalTax += itemPriceWithTax - itemPrice;

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching product information" })
    }
});