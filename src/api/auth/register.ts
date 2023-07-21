import { axios } from '@/lib/axios';
import { UserResponse } from '@/types/auth';

export type RegisterUserDTO = {
  email: string;
  password: string;
  name: string;
};

export async function register(data: RegisterUserDTO): Promise<UserResponse> {
  const res = await axios.post<UserResponse>('/auth/register', data);
  return res.data;
}
