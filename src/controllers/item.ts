import { Request, Response } from "express";
import { handleHttp } from "../utils/errors.handle";
import {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/items";

const getItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await getCar(id);
    const data = response ? response : "No_Found";
    res.send(data);
  } catch (e) {
    console.log(e);
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItems = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { body } = req;
  const update = await updateCar(id, body);
  res.send(update);
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEMS");
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = ({ params }: Request, res: Response) => {
  const { id } = params;
  const removeCar = deleteCar(id);
  res.send(removeCar);
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItems, getItem, updateItems, postItem, deleteItem };
