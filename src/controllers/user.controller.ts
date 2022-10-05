import { NextFunction, Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { validationResult } from "express-validator";

import { User } from "../entity/user.entity";

const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const error = validationResult(req);
    if(!error.isEmpty()){
      return res.status(400).json({
        success: false,
        errors: error.array()
      })
    }
    const password = Math.random().toString(36).substring(6)
    req.body.password = password;
    const result = await getRepository(User).save(req.body)
    const { email, name , status, created_at, updated_at} = result;
  res.status(200).send({message: "User registered successfully", email, name , status, created_at, updated_at})
    
  } catch (error) {
    next(error)
  }
};


export {
  createUserController,
}