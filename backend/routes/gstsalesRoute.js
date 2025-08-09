import express from 'express'
import { DeleteAllGstSales, DeleteGstSaleByBillNo, getAllGstSales, getGstSalesForBillNo } from '../controllers/gstsalesController.js'
import { authenticateToken } from '../controllers/authController.js'

const router = express.Router()

router.get("/",authenticateToken,getAllGstSales)
router.get('/billno/:billno',authenticateToken,getGstSalesForBillNo)
router.get('/deletegstsales',authenticateToken,DeleteAllGstSales)
router.get('/deletebybillno/:bill_no',authenticateToken,DeleteGstSaleByBillNo)
export default router