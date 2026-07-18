import { createUser, getUserById } from "../services/userService.js";

export const registerUser = async (req, res) => {
    try {
        const savedUser = await createUser(req.body);

        res.status(201).json(savedUser);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};