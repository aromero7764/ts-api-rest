import { Request, Response } from "express";
import { handleHttp } from "../utils/errors.handle";
import { registerUpload } from "../services/storage";
import { RequestExt } from "../interfaces/request.ext";
import { Storage } from "../interfaces/storage";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    console.log(file);
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_POST_FILE");
  }
};

export { getFile };
