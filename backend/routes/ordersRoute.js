import express from "express"
import {AddOrders, DeleteOrders, getAllOrders, GetOrderByPhoneNo} from "../controllers/ordersController.js"
import { authenticateToken } from "../controllers/authController.js"

const router = express.Router()

router.get('/',authenticateToken,getAllOrders)
router.get('/phoneno/:phoneno',authenticateToken,GetOrderByPhoneNo)
router.get('/deleteorder/:id',authenticateToken,DeleteOrders)
router.post('/addorder',authenticateToken,AddOrders)

export default router
