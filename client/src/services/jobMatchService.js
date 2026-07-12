import axios from "axios";

const API_URL = "http://localhost:5000/api/jobmatch";

export const getJobMatch = async (jobDescription) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      API_URL,
      { jobDescription },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
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