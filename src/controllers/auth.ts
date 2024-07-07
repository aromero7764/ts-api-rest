import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async (req: Request, res: Response) => {
  const { body } = req;
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async (req: Request, res: Response) => {
  const { body } = req;
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "Password_incorrect") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerCtrl, loginCtrl };
