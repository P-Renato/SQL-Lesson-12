import type { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';


export const validateUser = [
  check("username")
    .notEmpty()
    .withMessage("username is required")
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage("invalid username"),

  check("password")
    .notEmpty()
    .withMessage("password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/)
    .withMessage("invalid password"),

  (req: Request, res: Response, next: NextFunction) => {
    const results = validationResult(req);

    results.isEmpty() ? next() : res.status(422).send((results as any).errors);
  },
];