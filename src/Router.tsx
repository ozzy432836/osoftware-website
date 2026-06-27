import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { ApplicationError, NotFound } from './components/Error';
import { MENU } from './constants';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ApplicationError />,
    children: [
      {
        index: true,
        path: MENU.LANDING,
        element: (
          <AppLayout pageTitle="Home">
            <Home />
          </AppLayout>
        ),
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
