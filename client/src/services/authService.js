import axios from "axios";

const API_URL = "https://career-compass-ai-vdgp.onrender.com/api/auth";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Registration failed.",
      }
    );
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Login failed.",
      }
    );
  }
};

export default {
  register,
  login,
};
