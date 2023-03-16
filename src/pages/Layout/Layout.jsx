import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../../components'

const Layout = () => {
  return (
    <div className='app'>
      
        <Navbar />
      
      <section>
        <Outlet />
      </section>
        <Footer />
    </div>
  )
}

export default Layout