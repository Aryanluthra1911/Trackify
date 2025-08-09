import express from 'express';
import { DeleteAllSales, DeleteSaleById, getAllSales, getSalesForWeight } from '../controllers/salesController.js';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router()

router.get('/',authenticateToken,getAllSales);
router.get('/weight/:weight',authenticateToken,getSalesForWeight)
router.get('/deleteallsales',authenticateToken,DeleteAllSales)
router.get('/deletebyid/:id',authenticateToken,DeleteSaleById)

export default router