import { Request, Response, Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItems,
} from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router(); //manejador de las rutas en express get, post, udate, delete etc

/*
 * http://localhost:3001/items [GET]
 */

router.get("/", getItems);
router.get("/:id", logMiddleware, getItem);
router.post("/", postItem);
router.put("/:id", updateItems);
router.delete("/:id", deleteItem);

export { router };
