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
    const refreshToken = AuthService.getRefreshToken();

    if (error.response?.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true;

      try {
        const response = await axios.post<{ access: string }>('https://sk3dpages.ru/api/token/refresh/', {
          refresh: refreshToken,
        });

        const newAccessToken = response.data.access;
        AuthService.setJwtToken(newAccessToken);

        if (originalRequest.headers) {
          (originalRequest.headers as AxiosHeaders).set('Authorization', `Bearer ${newAccessToken}`);
        }
        return axios(originalRequest);
      } catch (refreshError) {
        AuthService.clearTokens();
        // Здесь можно добавить редирект или другой механизм обработки ошибки
      }
    }

    return Promise.reject(error);
  }
);

export default httpClient;
