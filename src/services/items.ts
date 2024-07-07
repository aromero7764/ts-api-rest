import { Car } from "../interfaces/car.interface";
import itemModels from "../models/item";

const insertCar = async (item: Car) => {
  const responseInsert = await itemModels.create(item);
  return responseInsert;
};

const getCars = async () => {
  const findAllCars = await itemModels.find({});
  return findAllCars;
};

const getCar = async (_id: string) => {
  const findOneCarById = await itemModels.find({ _id });
  return findOneCarById;
};

const updateCar = async (id: string, data: Car) => {
  const updateCarById = await itemModels.findOneAndUpdate({ _id: id }, data, {
    new: true,
  }); //New true responde con el objeto ya actualizado
  return updateCarById;
};
const deleteCar = async (id: string) => {
  const removeCar = await itemModels.findByIdAndDelete(id);
  return removeCar;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
