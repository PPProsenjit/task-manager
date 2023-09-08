import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Component/Login/Login';
import App from './App';
import Home from './Component/Home/Home';
import SignUp from './Component/SignUp/SignUp';
import Tasks from './Component/Tasks/Tasks';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import UserTask from './Component/UserTask/UserTask';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <SignUp></SignUp>
      },
      {
        path: 'tasks',
        element: <PrivateRoute><Tasks></Tasks></PrivateRoute>
      },
      {
        path: 'userTask',
        element: <PrivateRoute><UserTask></UserTask></PrivateRoute>
      },
    ],
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
