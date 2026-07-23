import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

import {
  createUser,
  getUserById,
  findUserByEmail,
} from "../services/userService.js";

export const registerUser = async (req, res) => {
  try {
    const savedUser = await createUser(req.body);

    const userResponse = {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    };

    res.status(201).json({
      message: "User registered successfully",
      user: userResponse,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get logged-in user's profile
// export const getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select("-password");

//     if (!user) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };



export const getProfile = async (req, res) => {
  console.log("========== PROFILE ==========");
  console.log("req.user =", req.user);

  try {
    if (!req.user) {
      return res.status(401).json({
        message: "req.user is undefined",
      });
    }

    const user = await User.findById(req.user._id).select("-password");

    console.log("DB user =", user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json(user);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
};