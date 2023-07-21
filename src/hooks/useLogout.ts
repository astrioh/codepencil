import { useNavigate } from 'react-router-dom';
import storage from '@/utils/storage';
import { useQueryClient } from 'react-query';
import { useCallback } from 'react';
import { QUERY_KEY } from '@/constants/queryKeys';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    queryClient.setQueryData([QUERY_KEY.user], null);
    storage.clearTokens();
    navigate('/login');
  }, [navigate, queryClient]);

  return onLogout;
}
