import { Header } from "../UI/Header"
import { Footer } from "../UI/Footer"
import React from 'react'   
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}