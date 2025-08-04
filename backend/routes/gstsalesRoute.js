import express from 'express'
import { DeleteAllGstSales, DeleteGstSaleByBillNo, getAllGstSales, getGstSalesForBillNo } from '../controllers/gstsalesController.js'

const router = express.Router()

router.get("/",getAllGstSales)
router.get('/billno/:billno',getGstSalesForBillNo)
router.get('/deletegstsales',DeleteAllGstSales)
router.get('/deletebybillno/:bill_no',DeleteGstSaleByBillNo)
export default router