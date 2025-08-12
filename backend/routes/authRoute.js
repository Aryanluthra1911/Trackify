import express from "express";
import { authenticateToken, Logout, GetToken } from "../controllers/authController.js";

const router = express.Router();

router.get('/gettoken', GetToken);
router.post('/logout', Logout);

export default router;
