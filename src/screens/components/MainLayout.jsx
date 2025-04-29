import React from 'react'
import Footer from './Footer'
import Navbar  from './Navbar'


const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer id="contact" />
    </div>
  )
}

export default MainLayout