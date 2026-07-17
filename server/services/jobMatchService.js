import JobMatch from "../models/JobMatch.js";


export const saveJobMatch = async (matchData) => {
    try {
        const match = new JobMatch(matchData);
        return await match.save();

    } catch (error) {
        throw error;
    }
};


export const getJobMatches = async () => {
    try {
        const matches = await JobMatch.find();

        return matches;

    } catch (error) {
        throw error;
    }
};