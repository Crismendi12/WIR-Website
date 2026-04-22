import { createBrowserRouter, Navigate } from 'react-router';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import RootLayout from './layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: AboutUs,
      },
      {
        path: 'solutions',
        Component: Solutions,
      },
      {
        path: 'blog',
        Component: Blog,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: 'products',
        element: <Navigate to="/solutions" replace />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);