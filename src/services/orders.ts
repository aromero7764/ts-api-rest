import { Car } from "../interfaces/car.interface";
import itemModels from "../models/item";

const getOrders = async () => {
  const findAllCars = await itemModels.find({});
  return findAllCars;
};

export { getOrders };
