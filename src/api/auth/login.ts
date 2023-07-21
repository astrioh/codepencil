import { axios } from '@/lib/axios';
import { UserResponse } from '@/types/auth';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export async function login(data: LoginCredentialsDTO): Promise<UserResponse> {
  const res = await axios.post<UserResponse>('/auth/login', data);
  return res.data;
}
