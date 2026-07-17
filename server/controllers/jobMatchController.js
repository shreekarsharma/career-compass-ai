import {
  saveJobMatch as saveJobMatchService,
  getJobMatches as getJobMatchesService,
} from "../services/jobMatchService.js";

export const saveJobMatch = async (req, res) => {
  try {
    const jobMatch = await saveJobMatchService(req.body);

    res.status(201).json(jobMatch);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getJobMatches = async (req, res) => {
  try {
    const matches = await getJobMatchesService();

    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
