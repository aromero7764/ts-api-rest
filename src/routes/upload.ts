import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file";
import { checkJWT } from "../middleware/session";

const router = Router(); //manejador de las rutas en express get, post, udate, delete etc

/*
 * http://localhost:3001/upload [POST]
 */

router.post("/", checkJWT, multerMiddleware.single("myFile"), getFile);

export { router };
