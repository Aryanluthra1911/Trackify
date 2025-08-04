import express from 'express';
import salesRoute from './routes/salesRoute.js';
import gstsalesRoute from './routes/gstsalesRoute.js';
import custombillsRoute from './routes/custombillsRoute.js';
import ordersRoute from './routes/ordersRoute.js'
import DashboardRouter from './routes/DashboardRouter.js'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 4444;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/dashboard',DashboardRouter)
app.use('/sales', salesRoute);
app.use('/gstsales',gstsalesRoute)
app.use('/custombill',custombillsRoute)
app.use('/orders',ordersRoute)
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
