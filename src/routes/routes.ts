import express from 'express';
import { orderRoutes } from './order.routes';
import {userRoutes} from './user.routes';
import {paymentRoutes} from "./payment.routes"

const app = express()

app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/payment', paymentRoutes)

export { app as routers };