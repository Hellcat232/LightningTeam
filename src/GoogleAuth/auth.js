import axios from "axios";

export const loginWithGoogle = async (credential) => {
  try {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/google`,
      {
        token: credential,
      }
    );

    const { accessToken, refreshToken, user } = response.data;
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      throw new Error("Token retrieval failed");
    }

    return { accessToken, refreshToken, user };
  } catch (error) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getAccessToken = () => {
  const token = localStorage.getItem("accessToken");
  return token !== "null" ? token : null;
};

export const getRefreshToken = () => {
  const token = localStorage.getItem("refreshToken");
  return token !== "null" ? token : null;
};

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
