import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "/",
        element: <Shop />
      },
      {
        path: "inventory",
        element: <Inventory />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
