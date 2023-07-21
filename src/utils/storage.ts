const ACCESS_TOKEN_STORAGE_KEY = 'access_token';
const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token';

export default {
  getTokens: () => {
    const tokens = {
      accessToken: localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY) || null,
      refreshToken: localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY) || null,
    };

    return tokens;
  },
  setAccessToken: (accessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);
  },
  setRefreshToken: (refreshToken: string) => {
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refreshToken);
  },
  clearTokens: () => {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
  },
};
