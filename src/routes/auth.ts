import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";

const router = Router(); //manejador de las rutas en express get, post, udate, delete etc

/*
 * http://localhost:3001/auth/register [POST]
 * http://localhost:3001/auth/login [POST]
 *
 */

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };
