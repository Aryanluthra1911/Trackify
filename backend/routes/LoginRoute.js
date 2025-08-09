import express from 'express'
import { Login } from '../controllers/authController.js';
const router = express.Router();

router.post('/',Login)


export default router