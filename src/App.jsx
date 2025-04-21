import React from 'react'
import "./App.css"
import { AppLayout } from './components/layouts/AppLayout'
import { Home } from './Pages/Home' // Importing the Home component
import { About } from './Pages/About' 
import { Contact } from './Pages/Contact'
import { Country } from './Pages/Country'
import { ErrorPage } from './Pages/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CountryDetails } from './components/layouts/CountryDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:countryName",
        element: <CountryDetails />,
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}

