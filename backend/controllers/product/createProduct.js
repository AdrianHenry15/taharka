import asyncHandler from 'express-async-handler'
import Product from '../../models/ProductModel.js'

// create product but only if your admin
export const createProduct = asyncHandler(async (req, res) => {
    const product = new Product(req.body);

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});