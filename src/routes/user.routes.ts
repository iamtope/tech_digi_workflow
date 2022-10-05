import { Router } from "express";
import {userBodyValidator} from '../validators/user.validators'
import { createUserController } from "../controllers/user.controller";

const router = Router();



router.post("/register",userBodyValidator,createUserController);

export { router as userRoutes };
