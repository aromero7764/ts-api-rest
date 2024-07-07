import { Request, Response } from "express";
import { handleHttp } from "../utils/errors.handle";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

const updateItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_BLOGS");
  }
};

const postItem = (req: Request, res: Response) => {
  try {
    const { body } = req;
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};

export { getItems, getItem, updateItems, postItem, deleteItem };
