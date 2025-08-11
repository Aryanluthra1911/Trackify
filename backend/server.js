import express from 'express';
import salesRoute from './routes/salesRoute.js';
import gstsalesRoute from './routes/gstsalesRoute.js';
import custombillsRoute from './routes/custombillsRoute.js';
import ordersRoute from './routes/ordersRoute.js'
import DashboardRouter from './routes/DashboardRouter.js'
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import LoginRoute from './routes/LoginRoute.js'
import SignupRoute from './routes/SignupRoute.js'
import SettingsRoute from './routes/SettingsRoute.js'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = 4444;
app.use(cors({
    origin:  process.env.FRONTEND_URL || 'http://localhost:5173',  // your frontend URL
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/dashboard',DashboardRouter)
app.use('/sales', salesRoute);
app.use('/gstsales',gstsalesRoute)
app.use('/custombill',custombillsRoute)
app.use('/orders',ordersRoute)
app.use('/login',LoginRoute)
app.use('/signup',SignupRoute)
app.use('/setting',SettingsRoute)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
