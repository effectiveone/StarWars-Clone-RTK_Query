import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import bgslide5 from "./assets/bg.jpg";

interface DashboardLayoutProps {
    children: React.ReactNode
}

function Layout ({ children }: DashboardLayoutProps) {
  return (
    <>
    <Navbar/>
    <div style={{
  backgroundImage: `url(${bgslide5})`,

  height: "100%",

  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingTop: "20px",
  paddingBottom: "50px",
     }}>
    {children}
    </div>

    <Footer/>
    </>
  )
}

export default Layout

