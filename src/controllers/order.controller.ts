import { NextFunction, Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { validationResult } from "express-validator";
import {createTransport} from "nodemailer";


import { Order } from "../entity/order.entity";

const createOrderController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const error = validationResult(req);
    if(!error.isEmpty()){
      return res.status(400).json({
        success: false,
        errors: error.array()
      })
    }
    const {email,rate, usdAmount, usdtAmount,paymentAmount,paymentStatus} = req.body;

    const result = await getRepository(Order).save(req.body)
    var transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'adamoabasstope@gmail.com',
        pass: 'quqmlsmmefxqjanm'
      }
    });



  await transporter.sendMail({
      from: 'adamoabasstope@gmail.com',
      to: req.body.email,
      subject: 'A Payment has been completed',
      html: `A payment has been completed, find the details below
      Usd Amount: ${usdAmount},
      Usdt Amount: ${usdtAmount},
      Rate: ${rate}
      Payment Amount : ${paymentAmount},
      Payment Status: ${paymentStatus}
      `
  }, (error, info)=>{
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  await transporter.close();
  res.status(200).send(result);
    
  } catch (error) {
    next(error)
  }
};


export {
  createOrderController,
}