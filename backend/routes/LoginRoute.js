import express from 'express'
import { GetToken, Login } from '../controllers/authController.js';
const router = express.Router();

router.post('/',Login)
router.get('/gettoken',GetToken)

export default router