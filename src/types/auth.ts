export type AuthUser = {
  id: number;
  email: string;
  name: string;
};

export type UserResponse = {
  jwt: {
    accessToken: string;
    refreshToken: string;
  };
  user: AuthUser;
};
