import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { protectedRoutes } from '@/routes/protected';
import { publicRoutes } from '@/routes/public';

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

export default function () {
  return <RouterProvider router={router} />;
}
