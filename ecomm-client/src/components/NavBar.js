import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
    <div className="nav-wrapper #1976d2 blue darken-2">
      <Link to="/" className="brand-logo">Daraz</Link>
      <ul id="nav-mobile" className="right">
        <li> <Link to='/login'> Login</Link> </li>
        <li> <Link to='/signup'> Signup</Link> </li>
        {/* <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li> */}
      </ul>
    </div>
  </nav>
  )
}

export default NavBar