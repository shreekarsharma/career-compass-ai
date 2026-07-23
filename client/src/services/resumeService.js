import axios from "axios";

const API_URL = "http://localhost:5000/api/resumes";

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

export const getResumeStatus = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to fetch resume status.",
      }
    );
  }
};

export const deleteResume = async (id) => {
  const token = localStorage.getItem("token");

  return axios.delete(
    `http://localhost:5000/api/resumes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default {
  uploadResume,
};