import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './styles/globals.css'
import HomePage from './pages/Home/index.jsx'
import Layout from './components/Layout/index.jsx'
import CryptosPage from './pages/Cryptos/index.jsx'
import CryptoPage from './pages/Crypto/index.jsx'
import PopularPage from './pages/Popular/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cryptos",
        element: <CryptosPage />,
      },
      {
        path: "/cryptos/:id",
        element: <CryptoPage />,
      },
      {
        path: "/popular",
        element: <PopularPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
