import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = ({ onSuccess }) => {
  const handleLoginSuccess = async (credentialResponse) => {
    try {
      console.log(`Credential response: ${JSON.stringify(credentialResponse)}`);

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });

      const { accessToken, refreshToken, user } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      console.log('User:', user);
      if (onSuccess) {
        onSuccess(user);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <GoogleLogin
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      onSuccess={handleLoginSuccess}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default GoogleLoginButton;

