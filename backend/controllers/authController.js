import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { TokenExpiredError } = jwt;
import dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;


export const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const verified = jwt.verify(token, JWT_SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            return res.status(401).json({ message: 'Token expired' });
        }
        res.status(400).json({ message: 'Invalid Token' });
    }
};

export const AddAccount = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newaccount = await prisma.credentials.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        });
        const token = jwt.sign({ email: email }, JWT_SECRET_KEY, { expiresIn: '90d' });
        
        res.cookie('token', token, {
            maxAge: 90 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });

        console.log("Generated JWT:", token);

        return res.json({ status: true, message: 'signup successful', token: token });
    } catch (err) {
        console.error("Insert error:", err);
        res.status(500).json({ err: "Failed to add account" });
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const credential = await prisma.credentials.findFirst({
            where: { email }
        });

        if (!credential) {
            return res.json({ status: false, message: 'Email not found' });
        }

        const isCorrect = await bcrypt.compare(password, credential.password);
        if (!isCorrect) {
            return res.json({ status: false, message: 'Wrong password' });
        }

        const token = jwt.sign({ email: email }, JWT_SECRET_KEY, { expiresIn: '90d' });
        
        res.cookie('token', token, {
            maxAge: 90 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });

        console.log("Generated JWT:", token);

        return res.json({ status: true, message: 'Login successful', token: token });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ err: "Login failed" });
    }
};

export const GetToken = (req, res) => {
    const token = req.cookies.token;
    res.json({ token: token || null });
};
export const Logout = async (req, res) => {
    try {
        // Multiple approaches to clear cookie
        res.clearCookie("token", { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax",
            path: "/"
        });
        
        // Backup - set empty cookie
        res.cookie('token', '', {
            maxAge: 0,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax",
            path: "/"
        });
        
        return res.json({ 
            status: true, 
            message: "Logged out successfully"
        });
        
    } catch (error) {
        console.error('Logout error:', error);
        return res.status(500).json({ 
            status: false, 
            message: "Logout failed" 
        });
    }
}