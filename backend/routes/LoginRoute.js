import express from 'express'
import { GetEmail, Login } from '../controllers/authController.js';
const router = express.Router();

router.post('/',Login)
router.get('/getemail',GetEmail)


export default router