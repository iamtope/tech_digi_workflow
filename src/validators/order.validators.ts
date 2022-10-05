import {body} from "express-validator";
export const orderBodyValidator = [
    body("email").exists().withMessage("Email is missing").isEmail().withMessage("Provide a valid email"),
    body("withdrawAddress").exists().withMessage("withdrawAddress is missing").withMessage("not string").trim(),
    body("transactionId").exists().withMessage("transactionId is missing").withMessage("not string").trim(),
    body("rate").exists().withMessage("rate is missing").withMessage("not numeric").trim(),
    body("usdAmount").exists().withMessage("usdAmount is missing").withMessage("not numeric").trim().toFloat().withMessage("invalid"),
    body("usdtAmount").exists().withMessage("usdtAmount is missing").withMessage("not numeric").trim().toFloat().withMessage("invalid"),
    body("paymentAmount").exists().withMessage("paymentAmoun is missing").withMessage("not numeric").trim().toFloat().withMessage("invalid"),
    body("paymentStatus").exists().withMessage("paymentStatus is missing").withMessage("not string").trim(),
    body("sentStatus").exists().withMessage("sentStatus is missing").withMessage("not string").trim()
]