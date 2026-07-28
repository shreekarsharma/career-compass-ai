import axios from "axios";

const API_URL = "https://career-compass-ai-vdgp.onrender.com/api/users/profile";

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// NEW
export const getProfileStats = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    "https://career-compass-ai-vdgp.onrender.com/api/users/profile/stats",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
