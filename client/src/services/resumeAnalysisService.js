import axios from "axios";

const API_URL =
  "https://career-compass-ai-vdgp.onrender.com/api/resume-analysis";

export const getResumeAnalysis = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.analysis;
};
