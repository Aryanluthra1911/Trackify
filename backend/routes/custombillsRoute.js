import express from "express"
import { AddBill, DeleteBills, FindBillsByTotal, getAllCustombills} from '../controllers/customBillController.js'
import { authenticateToken } from "../controllers/authController.js";
const router = express.Router();

router.get('/',authenticateToken,getAllCustombills)
router.get('/total/:total',authenticateToken,FindBillsByTotal)
router.get('/deletebill',authenticateToken,DeleteBills)
router.post('/addbill',authenticateToken,AddBill)

export default router