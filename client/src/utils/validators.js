// Validate Email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate Password
export const validatePassword = (password) => {
  // Minimum 8 characters
  return password.length >= 8;
};

// Validate Name
export const validateName = (name) => {
  return name.trim().length >= 2;
};

// Confirm Password
export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

// Validate PDF File
export const validatePDF = (file) => {
  if (!file) return false;
  return file.type === "application/pdf";
};