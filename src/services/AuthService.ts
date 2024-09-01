import httpClient from './ApiService';

class AuthService {
  setUsername(username: string): void {
    localStorage.setItem('username', username);
  }
  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  setJwtToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }
  setRefreshToken(token: string): void {
    localStorage.setItem('refreshToken', token);
  }

  getJwtToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  clearTokens(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
  }

  isAuthenticated(): boolean {
    const jwtToken = this.getJwtToken();
    return jwtToken !== null;
  }

  async register(username: string, password: string, email: string): Promise<void> {
    try {
      const response = await httpClient.post('/auth/register/', {
        username,
        password,
        email,
      });
      const { access, refresh } = response.data;
      this.setUsername(username);


      this.setJwtToken(access);
      this.setRefreshToken(refresh);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  // Авторизация пользователя
  async login(login: string, password: string): Promise<void> {
    try {
      const response = await httpClient.post('/auth/login/', {
        login,
        password,
      });

      const { access, refresh } = response.data;
      this.setJwtToken(access);
      this.setRefreshToken(refresh);

      const username = response.data.username; 
      this.setUsername(username);
      return username;
      
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  logout(): void {
    this.clearTokens();
  }
}

export default new AuthService();
