import axios from "axios";

const API_URL = "http://localhost:5000/api/analysis";

export const analyzeResume = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${API_URL}/analyze`,
      {},
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
        message: "Failed to analyze resume.",
      }
    );
  }
};

export default {
  analyzeResume,
};