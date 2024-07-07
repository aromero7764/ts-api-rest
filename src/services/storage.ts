import { Car } from "../interfaces/car.interface";
import { Storage } from "../interfaces/storage";
import storageModel from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const registerFile = await storageModel.create({ fileName, idUser, path });
  return registerFile;
};

export { registerUpload };
