import express from 'express'
import { createCart } from '../controllers/cart/createCart.js'
import { deleteItem } from '../controllers/cart/deleteItem.js'
import { updateCart } from '../controllers/cart/updateCart.js'
import { getItem } from '../controllers/cart/getItem.js'

const router = express.Router()

router.get('/:id', getItem);
router.post('/:id', createCart);
router.put('/:userId/:itemid', updateCart)
router.delete('/:userId/:itemid', deleteItem)

export default router
