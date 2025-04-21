import React from 'react'
import "./App.css"
import { Home } from './Pages/Home' // Importing the Home component
import { About } from './Pages/About' 
import { Contact } from './Pages/Contact'
import { Country } from './Pages/Country'
import { ErrorPage } from './Pages/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/country/:id",
    element: <Country />,
    errorElement: <ErrorPage />,
  }
])

export default function App() {
  return <RouterProvider router={router} />
}

