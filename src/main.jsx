import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './styles/globals.css'
import HomePage from './pages/Home/index.jsx'
import NavBar from './components/NavBar/index.jsx'
import Layout from './components/Layout/index.jsx'
import CryptosPage from './pages/Cryptos/index.jsx'
import CryptoCard from './components/CryptoCard/index.jsx'

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
        element: <CryptoCard name={"teste"}/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
