import dotenv from "dotenv";
import jwt from "jsonwebtoken"; 
dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const getEmailFromReq = (req) => {
    const token = req.cookies.token;
    if (!token) throw new Error("No token found");
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    return decoded.email;
};