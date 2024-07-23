import axios from "axios";

export const loginWithGoogle = async (credential) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/google`,
      {
        token: credential,
      }
    );

    const { accessToken, refreshToken, user } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return { accessToken, refreshToken, user };
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");

export const setAccessToken = (token) =>
  localStorage.setItem("accessToken", token);
export const setRefreshToken = (token) =>
  localStorage.setItem("refreshToken", token);

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
    {
      token: refreshToken,
    }
  );

  const { accessToken, refreshToken: newRefreshToken } = response.data;

  setAccessToken(accessToken);
  setRefreshToken(newRefreshToken);

  return accessToken;
};
