import express from 'express'
import { createCart } from '../controllers/cart/createCart.js'
import { removeItemFromCart } from '../controllers/cart/removeItemFromCart.js'
import { updateCartItem } from '../controllers/cart/updateCartItem.js'
import { getCartById } from '../controllers/cart/getCartById.js'
import { addItemToCart } from '../controllers/cart/addItemToCart.js'
import { checkoutCart } from '../controllers/cart/checkoutCart.js'

const router = express.Router()

router.post('/', createCart);
router.get('/:cartId', getCartById)
router.post('/:cartId/checkout', checkoutCart);
router.post('/:cartId/items', addItemToCart)
router
    .route('/:cartId/items/:itemId')
    .put(updateCartItem)
    .delete(removeItemFromCart)

export default router
