import express from "express"
import { AddGstSales, AddSales } from "../controllers/DashboardController.js"
import { authenticateToken } from "../controllers/authController.js"

const router = express.Router()

router.post('/addsales',authenticateToken,AddSales)
router.post('/addgstsales',authenticateToken,AddGstSales)

export default router