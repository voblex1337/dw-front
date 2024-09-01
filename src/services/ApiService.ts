import axios, { AxiosError, AxiosHeaders } from 'axios';
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import AuthService from '@/services/AuthService';

const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = AuthService.getJwtToken();
    if (token) {
      if (config.headers) {
        (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = AuthService.getRefreshToken();
        if (!refreshToken) throw new Error('No refresh token available');

        const response = await httpClient.post('auth/refresh/', {
          refresh: refreshToken,
        });

        const { access } = response.data;
        AuthService.setJwtToken(access);

        if (originalRequest.headers) {
          (originalRequest.headers as AxiosHeaders).set('Authorization', `Bearer ${access}`);
        }

        return httpClient(originalRequest);
      } catch (refreshError) {
        AuthService.clearTokens();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default httpClient;
