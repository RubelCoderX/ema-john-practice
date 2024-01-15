import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Layout/Home.jsx';
import Shop from './component/Shop/Shop.jsx';
import Orders from './component/Orders/Orders.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import Login from './component/Login/Login.jsx';
import cartProductsLoader from './loaders/cartProductsLoader.js';
import Checkout from './component/Checkout/Checkout.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import AuthProvider from './component/Providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([

  {
      path: '/',
      element:<Home></Home>,
      children:[
        {
          path:'/',
          element:<Shop></Shop>
        },
        {
          path: 'orders',
          element:<Orders></Orders>,
          loader: cartProductsLoader
        },
        {
          path: 'inventory',
          element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path:'checkout',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
        {
          path: 'Login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
