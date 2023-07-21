import { RegisterUserDTO, register } from '@/api/auth/register';
import { QUERY_KEY } from '@/constants/queryKeys';
import storage from '@/utils/storage';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

async function registerFn(data: RegisterUserDTO) {
  const response = await register(data);
  const { jwt, user } = response;

  storage.setAccessToken(jwt.accessToken);
  storage.setRefreshToken(jwt.refreshToken);

  return user;
}

export function useRegister() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: registerMutation } = useMutation({
    mutationFn: registerFn,
    onSuccess: (user) => {
      queryClient.setQueryData([QUERY_KEY.user], user);
      navigate('/');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return registerMutation;
}
