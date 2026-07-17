import User from "../models/User.js";

export const createUser = async (userData) => {
    try {
        const user = new User(userData);
        return await user.save();

    } catch (error) {
        throw error;
    }
};


export const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);

        return user;

    } catch (error) {
        throw error;
    }
};