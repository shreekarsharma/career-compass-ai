import bcrypt from "bcrypt";
import User from "../models/User.js";

export const createUser = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = new User({
    ...userData,
    password: hashedPassword,
  });

  return await user.save();
};

export const getUserById = async (userId) => {
  return await User.findById(userId);
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
