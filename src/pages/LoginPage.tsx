import LoginForm from '@/components/Auth/LoginForm';
import AuthLayout from '@/components/Layouts/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout title="Sign in to your account">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
