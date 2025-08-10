import express from 'express'
import { AddAccount} from '../controllers/authController.js';
const router = express.Router();

router.post('/',AddAccount)

export default router