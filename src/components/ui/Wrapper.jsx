import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Wrapper = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Wrapper
