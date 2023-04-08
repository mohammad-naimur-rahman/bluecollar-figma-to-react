import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkStyled = ({
  to,
  children,
  className,
  ...rest
}: {
  to: string
  children: ReactNode
  className: string
}) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? 'underline' : '',
          textUnderlineOffset: '1px',
          textUnderlinePosition: 'under'
        }
      }}
      className={className}
      {...rest}
    >
      {children}
    </NavLink>
  )
}

export default NavLinkStyled
