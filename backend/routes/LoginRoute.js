import express from 'express'
import { GetEmail, Login } from '../controllers/authController.js';
const router = express.Router();

router.post('/',Login)

export default router