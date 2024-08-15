import axios, { AxiosError } from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import AuthService from '@/services/AuthService';

const httpClient = axios.create({
  baseURL: 'https://sk3dpages.ru/',
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = AuthService.getJwtToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
    const refreshToken = AuthService.getRefreshToken();

    // Если ошибка связана с истечением срока действия access токена
    if (error.response?.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true;

      try {а
        const response = await axios.post<{ access: string }>('https://sk3dpages.ru/api/token/refresh/', {
          refresh: refreshToken,
        });

        // Обновление access и refresh токенов
        const newAccessToken = response.data.access;
        AuthService.setJwtToken(newAccessToken);

        // Повторный запрос с обновленным access токеном
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        // Если обновление токена не удалось, очистите токены и перенаправьте пользователя на страницу входа
        AuthService.clearTokens();
        // редирект или обработка ошибки
      }
    }

    return Promise.reject(error);
  }
);

export default httpClient;
