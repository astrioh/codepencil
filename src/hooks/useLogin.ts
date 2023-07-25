import { useNavigate } from 'react-router-dom';
import { LoginCredentialsDTO, login } from '@/api/auth/login';
import { QUERY_KEY } from '@/constants/queryKeys';
import storage from '@/utils/storage';
import { useMutation, useQueryClient } from 'react-query';
import { AuthUser } from '@/types/auth';

async function loginFn(data: LoginCredentialsDTO) {
  const response = await login(data);
  const { jwt, user } = response;

  storage.setAccessToken(jwt.accessToken);
  storage.setRefreshToken(jwt.refreshToken);

  return user;
}

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
};

export function useLogin(options?: UseLoginOptions) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate,
    isLoading: isLoggingIn,
    isError: isLoggingError,
  } = useMutation({
    mutationFn: loginFn,
    onSuccess: (user) => {
      queryClient.setQueryData([QUERY_KEY.user], user);
      navigate('/');
      options?.onSuccess?.(user);
    },
  });

  return { login: mutate, isLoggingIn, isLoggingError };
}
