import axios from "axios";

const API_URL = "http://localhost:5000/api/resume";

export const uploadResume = async (file) => {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("resume", file);

    const response = await axios.post(
      `${API_URL}/upload`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to upload resume.",
      }
    );
  }
};

export const getResumeHistory = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:5000/api/history",
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
        message: "Failed to fetch resume history.",
      }
    );
  }
};

export default {
  uploadResume,
  getResumeHistory,
};