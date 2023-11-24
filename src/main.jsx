import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import MyCreatedRoutes from './AllRoutes/MyCreatedRoutes';
import AuthContext from './provider/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <RouterProvider router={MyCreatedRoutes} />
    </AuthContext>
  </React.StrictMode>,
)
