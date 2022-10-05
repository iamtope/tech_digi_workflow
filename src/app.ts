import express, { json } from "express";
import dotenv from 'dotenv';
dotenv.config()
import 'express-async-errors';
import cors from 'cors';

import { routers } from "./routes/routes";


const app = express();


// initial configuration
app.use(cors({
  origin: '*'
}))
app.use(json());


// Routes
app.use('/api',routers);


export { app }
