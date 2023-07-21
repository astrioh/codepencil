import { getUser } from '@/api/auth/getUser';
import { QUERY_KEY } from '@/constants/queryKeys';
import storage from '@/utils/storage';
import { useQuery } from 'react-query';

async function loadUser() {
  if (storage.getTokens().accessToken) {
    return getUser();
  }

  return null;
}

export function useUser() {
  const { data: user } = useQuery([QUERY_KEY.user], loadUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    user: user ?? null,
  };
}
