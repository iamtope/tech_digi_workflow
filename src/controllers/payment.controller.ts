import { NextFunction, Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { validationResult } from "express-validator";

import { Payment } from "../entity/payment.entity";

const createPaymentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: error.array(),
      });
    }

    const result = await getRepository(Payment).save(req.body);

    res.status(200).send({"status": 200, "Message": "Payment made successfully", "data": result});
  } catch (error) {
    next(error);
  }
};

const fetchPaymentByEmailAndStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, paymentStatus } = req.query;
    const payment = await getRepository(Payment).find({
      where: {
        email,
        paymentStatus,
      },
    });

    res.status(200).send({"status": 200, "Message": "Payment fetched successfully", "data":payment});
  } catch (error) {
    next(error);
  }
};

const updatePayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: error.array(),
      });
    }
    const { email, amount } = req.query;
    const {paymentStatus} = req.body;
    const data = await getRepository(Payment).find({
      where: {
        email,
        amount,
      },
    });
    if (data.length === 0) {
      return res
        .status(404)
        .send({"status": 404, Message: "Cannot Find any payment with these details" });
        // return
    }
    const id = data[0].id;
    await getRepository(Payment).update({id},
      {paymentStatus}
    );
    return res.status(200).send({"status": 200, "Message": "Payment updated successfully", "data": await getRepository(Payment).findOne(id)});
  } catch (error) {
    next(error);
  }
};

export { createPaymentController, fetchPaymentByEmailAndStatus, updatePayment };
