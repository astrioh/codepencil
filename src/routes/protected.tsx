import { useUser } from '@/hooks/useUser';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useUser();
  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>;
};

export const protectedRoutes = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <div>Home page</div>
      </ProtectedRoute>
    ),
  },
];
