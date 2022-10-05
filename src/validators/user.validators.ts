import {body} from "express-validator";
export const userBodyValidator = [
    body("email").exists().withMessage("Email is missing").isEmail().withMessage("Provide a valid email"),
    body("name").exists().withMessage("name is missing").withMessage("not string").trim(),
    body("status").exists().withMessage("status is missing").withMessage("not string").trim(),
]