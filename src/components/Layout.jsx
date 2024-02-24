// import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

function Layout() {
  return (
	<div className="layout">
    <NavBar />
    <main className="main-container">
      <Outlet />
      <Toaster />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default Layout