import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/request.ext";

const checkJWT = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const checkjwt = req.headers.authorization || "";
    const jwt = checkjwt?.split(" ").pop();
    const isUser = (await verifyToken(`${jwt}`)) as { id: string };
    console.log(isUser);
    if (!isUser) {
      res.status(400);
      res.send("NO_tienes_un_jwt_valido");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("SESION_NO_VALIDA");
  }
};

export { checkJWT };
