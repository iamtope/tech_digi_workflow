import {body,query,param} from "express-validator";
export const paymentBodyValidator = [
    body("email").exists().withMessage("Email is missing").isEmail().withMessage("Provide a valid email"),
    body("currencyName").exists().withMessage("currencyName is missing").withMessage("not string").trim(),
    body("amount").exists().withMessage("amount is missing").withMessage("not numeric").trim(),
    body("paidCurrency").exists().withMessage("paidCurrency is missing").withMessage("not string").trim(),
    body("paidAmount").exists().withMessage("paidAmount is missing").withMessage("not numeric").trim().toFloat().withMessage("invalid"),
    body("transactionId").exists().withMessage("transactionId is missing").withMessage("not string").trim(),  
    body("orderId").exists().withMessage("orderId is missing").withMessage("not string").trim(),  
]

export const updatePaymentValidator =[
    query("email").exists().withMessage("Email is missing").isEmail().withMessage("Provide a valid email"),
    query("amount").exists().withMessage("amount is missing").withMessage("not numeric").trim().toFloat().withMessage("invalid"),,
    body("paymentStatus").exists().withMessage("paymentStatus is missing").withMessage("not string").trim(), 
]