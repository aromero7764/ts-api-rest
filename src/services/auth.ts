import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import userModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({
  email,
  password,
  name,
  description,
}: User) => {
  const chekIs = await userModel.findOne({ email });
  if (chekIs) return "already user";
  const passHash = await encrypt(password);
  const registerNewUser = await userModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const chekIs = await userModel.findOne({ email });
  if (!chekIs) return "No_found_user";
  const passwordHash = chekIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "Password_incorrect";
  const token = generateToken(chekIs.email);
  const data = {
    token,
    user: chekIs,
  };
  return data;
};

export { loginUser, registerNewUser };
