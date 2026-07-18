import dotenv from "dotenv";
import connectDB from "../config/db.js";
import { deleteResumeAnalysis } from "../services/resumeService.js";

dotenv.config();

const test = async () => {
    try {
        await connectDB();

        const deletedAnalysis = await deleteResumeAnalysis(
            "6a59f3e2f20289f66064732d"
        );

        console.log("Deleted Resume Analysis:");
        console.log(deletedAnalysis);

        process.exit();

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

test();