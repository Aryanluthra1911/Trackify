import express from 'express';
import { DeleteAllSales, DeleteSaleById, getAllSales, getSalesForWeight } from '../controllers/salesController.js';

const router = express.Router()

router.get('/',getAllSales);
router.get('/weight/:weight',getSalesForWeight)
router.get('/deleteallsales',DeleteAllSales)
router.get('/deletebyid/:id',DeleteSaleById)

export default router