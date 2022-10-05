import { Router } from "express";
import {orderBodyValidator} from '../validators/order.validators'
import { createOrderController } from "../controllers/order.controller";

const router = Router();



router.post("/payment/create",orderBodyValidator,createOrderController);

export { router as orderRoutes };