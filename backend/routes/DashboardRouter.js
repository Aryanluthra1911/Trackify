import express from "express"
import { AddGstSales, AddSales } from "../controllers/DashboardController.js"

const router = express.Router()

router.post('/addsales',AddSales)
router.post('/addgstsales',AddGstSales)

export default router