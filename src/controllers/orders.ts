import { Request, Response } from "express";
import { handleHttp } from "../utils/errors.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/request.ext";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "Esto solo lo ve las personas con sesion jwt",
      user: req?.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

export { getItems };
