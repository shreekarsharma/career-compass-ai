import axios from "axios";

const API_URL = "https://career-compass-ai-vdgp.onrender.com/api/jobmatches";

export const getJobMatch = async (jobDescription) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${API_URL}/analyze`,
      { jobDescription },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to analyze job match.",
      }
    );
  }
};

export default {
  getJobMatch,
};
