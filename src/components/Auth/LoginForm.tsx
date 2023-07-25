import { Form } from '@/components/Form/Form';
import { z } from 'zod';
import { useLogin } from '@/hooks/useLogin';
import { InputField } from '@/components/Form/InputField';
import { Button } from '@/components/Elements/Button';

type LoginValues = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, 'Required').email(),
  password: z.string().min(1, 'Required'),
});

type LoginFormProps = {
  onSuccess?: () => void;
};

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { login, isLoggingIn } = useLogin({ onSuccess: () => onSuccess && onSuccess() });

  return (
    <Form<LoginValues, typeof schema> onSubmit={(values) => login(values)} schema={schema}>
      {({ register, formState }) => (
        <>
          <InputField
            type="email"
            label="Email address"
            error={formState.errors['email']}
            registration={register('email')}
          />
          <InputField
            type="password"
            label="Password"
            error={formState.errors['password']}
            registration={register('password')}
          />
          <div>
            <Button isLoading={isLoggingIn} type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

export default LoginForm;
