import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import NotFound from './pages/notfound.jsx';
import Products from './pages/products';
import Profile from './pages/profile';
import DetailProduct from './pages/detailProduct';
import DarkModeContextProvider from './context/DarkMode';
import { TotalPriceProvider } from './context/TotalPrice';

const rooter = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/product/:id',
    element: <DetailProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <TotalPriceProvider>
        <RouterProvider router={rooter} />
      </TotalPriceProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
);

// createContext, useContext, useReducer