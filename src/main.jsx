import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import UserInfoProvider from './Providers/UserInfoProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserInfoProvider>
        <RouterProvider router={router} />
      </UserInfoProvider>
    </AuthProvider>
  </React.StrictMode>,
)
