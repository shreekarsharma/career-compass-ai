import Resume from "../models/Resume.js";
import JobMatch from "../models/JobMatch.js";
import User from "../models/User.js";

export const getProfileStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).select("-password");

    const resumeCount = await Resume.countDocuments({
      user: userId,
    });

    const jobMatches = await JobMatch.find({
      user: userId,
    });

    const jobMatchCount = jobMatches.length;

    let averageMatch = 0;

    if (jobMatchCount > 0) {
      const total = jobMatches.reduce(
        (sum, match) => sum + match.matchScore,
        0
      );

      averageMatch = Math.round(total / jobMatchCount);
    }

    res.json({
      user,
      stats: {
        resumeCount,
        jobMatchCount,
        averageMatch,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};