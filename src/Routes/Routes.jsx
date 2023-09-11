import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'order/:category',
        element: <Order />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
    ],
  },
]);