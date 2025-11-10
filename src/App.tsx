import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard';
import Rules from '@/pages/Rules';
import Amoe from '@/pages/Amoe';
import Privacy from '@/pages/Privacy';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import { Toaster } from '@/components/ui/toaster';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/rules/:promoId',
    element: <Rules />,
  },
  {
    path: '/amoe/:promoId',
    element: <Amoe />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;