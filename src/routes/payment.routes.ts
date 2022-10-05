import { Router } from "express";
import {paymentBodyValidator, updatePaymentValidator} from '../validators/payment.validator'
import { createPaymentController,fetchPaymentByEmailAndStatus, updatePayment } from "../controllers/payment.controller";

const router = Router();



router.post("/create",paymentBodyValidator,createPaymentController);
router.get("/", fetchPaymentByEmailAndStatus)
router.put("/update", updatePayment)

export { router as paymentRoutes };