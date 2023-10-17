import express from 'express'
import { createProduct } from '../controllers/product/createProduct.js'
import { deleteItem } from '../controllers/cart/deleteItem.js'
import { updateCart } from '../controllers/cart/updateCart.js'
import { getItem } from '../controllers/cart/getItem.js'
import { getAllProducts } from '../controllers/product/getAllProducts.js'

const router = express.Router()

router.post('/', createProduct);
router.get('/', getAllProducts);
// router.get('/:id', getItem);
// router.put('/:id', updateCart)
// router.delete('/:id', deleteItem)

export default router
