import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav" >

      <div>
        SmallProject
      </div>

      <ul className="nav-list">
        <li>
          <NavLink activeClassName="active" exact to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/login"> Login </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/register"> Register </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/profile"> Profile </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/apihome"> ApiHome </NavLink>
        </li>
      </ul>

    </nav>
  )
}
