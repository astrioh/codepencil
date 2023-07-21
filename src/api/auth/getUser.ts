import { axios } from '@/lib/axios';
import { AuthUser } from '@/types/auth';

export async function getUser(): Promise<AuthUser> {
  const res = await axios.get<AuthUser>('/auth/me');
  return res.data;
}
