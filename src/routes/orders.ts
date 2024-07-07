import { Router } from "express";
import { getItems } from "../controllers/orders";
import { checkJWT } from "../middleware/session";

/*
 * Esta ruta solo pueden acceder las que tengan un jwt valido
 */

const router = Router();
router.get("/", checkJWT, getItems);

export { router };
