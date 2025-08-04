import express from "express"
import { AddBill, DeleteBills, FindBillsByTotal, getAllCustombills} from '../controllers/customBillController.js'
const router = express.Router();

router.get('/',getAllCustombills)
router.get('/total/:total',FindBillsByTotal)
router.get('/deletebill',DeleteBills)
router.post('/addbill',AddBill)

export default router