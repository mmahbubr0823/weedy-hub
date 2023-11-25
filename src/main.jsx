import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import MyCreatedRoutes from './AllRoutes/MyCreatedRoutes';
import AuthContext from './provider/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthContext>
    <RouterProvider router={MyCreatedRoutes} />
    </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>,
)
