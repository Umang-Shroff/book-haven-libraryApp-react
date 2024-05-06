import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navdiv">
      <div className="navimg">Company</div>
      <a className="nav-a" href="/">Home</a>
      <a className="nav-a" href="/books">Books</a>
      <a className="nav-a" href="/about" style={{marginRight:'70px'}}>About</a>
    </div>
  )
}

export default Navbar
