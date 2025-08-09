import express from "express"
import { authenticateToken, Logout } from "../controllers/authController.js";
const router = express.Router();

router.get('/logout',authenticateToken,Logout)
export default router