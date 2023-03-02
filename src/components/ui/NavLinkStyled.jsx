import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkStyled = ({ to, children, ...rest }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? 'underline' : ''
        }
      }}
      {...rest}
    >
      {children}
    </NavLink>
  )
}

export default NavLinkStyled
