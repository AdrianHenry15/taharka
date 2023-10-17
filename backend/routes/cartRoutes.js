import express from 'express'
import { createCart } from '../controllers/cart/createCart.js'
import { deleteItem } from '../controllers/cart/deleteItem.js'
import { updateCart } from '../controllers/cart/updateCart.js'
import { getItem } from '../controllers/cart/getItem.js'

const router = express.Router()

router.post('/', createCart);
router.get('/:id', getItem);
router.put('/:itemid', updateCart)
router.delete('/:itemid', deleteItem)

export default router
