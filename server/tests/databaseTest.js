import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import { createUser } from "../services/userService.js";


const testDatabase = async () => {

    try {

        await connectDB();

        const user = await createUser({
            name: "Test User",
            email: "test@gmail.com",
            password: "123456"
        });


        console.log("User saved successfully:");
        console.log(user);


    } catch(error) {

        console.log(error);

    }

};


testDatabase();