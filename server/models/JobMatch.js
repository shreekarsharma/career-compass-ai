import mongoose from "mongoose";

const jobMatchSchema = new mongoose.Schema({

    jobDescription: {
        type: String,
        required: true
    },

    matchScore: {
        type: Number,
        default: 0
    },

    matchingSkills: {
        type: [String],
        default: []
    },

    missingSkills: {
        type: [String],
        default: []
    },

    suggestions: {
        type: [String],
        default: []
    },

    interviewQuestions: {
        type: [String],
        default: []
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });


const JobMatch = mongoose.model("JobMatch", jobMatchSchema);

export default JobMatch;