import { useNavigate } from 'react-router-dom';
import { LoginCredentialsDTO, login } from '@/api/auth/login';
import { QUERY_KEY } from '@/constants/queryKeys';
import storage from '@/utils/storage';
import { useMutation, useQueryClient } from 'react-query';

async function loginFn(data: LoginCredentialsDTO) {
  const response = await login(data);
  const { jwt, user } = response;

  storage.setAccessToken(jwt.accessToken);
  storage.setRefreshToken(jwt.refreshToken);

  return user;
}

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginMutation } = useMutation({
    mutationFn: loginFn,
    onSuccess: (user) => {
      queryClient.setQueryData([QUERY_KEY.user], user);
      navigate('/');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return loginMutation;
}
