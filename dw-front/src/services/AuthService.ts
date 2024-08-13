class AuthService {
    // Сохранение JWT токена
    setJwtToken(token: string): void {
      localStorage.setItem('jwtToken', token);
    }
  
    // Сохранение Refresh токена (если используется)
    setRefreshToken(token: string): void {
      localStorage.setItem('refreshToken', token);
    }
  
    // Получение JWT токена
    getJwtToken(): string | null {
      return localStorage.getItem('jwtToken');
    }
  
    // Получение Refresh токена (если используется)
    getRefreshToken(): string | null {
      return localStorage.getItem('refreshToken');
    }
  
    // Очистка токенов при выходе из системы
    clearTokens(): void {
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('refreshToken');
    }
  
    // Проверка аутентификации
    isAuthenticated(): boolean {
      const jwtToken = this.getJwtToken();
      return jwtToken !== null;
    }
  }
  
  export default new AuthService();
  