import express from "express"
import {AddOrders, DeleteOrders, getAllOrders, GetOrderByPhoneNo} from "../controllers/ordersController.js"

const router = express.Router()

router.get('/',getAllOrders)
router.get('/phoneno/:phoneno',GetOrderByPhoneNo)
router.get('/deleteorder/:id',DeleteOrders)
router.post('/addorder',AddOrders)

export default router
