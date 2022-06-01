import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './NavBar.css'
// import Pix from '../../assets/images/img8.jpg'

const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Kmath</h1>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
            Home
          </a>{' '}
        </li>
        <li className="nav-item">
          <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
            About
          </a>{' '}
        </li>

        <li className="nav-item">
          <a href="/project" style={{ textDecoration: 'none', color: 'white' }}>
            Project
          </a>{' '}
        </li>

        <li className="nav-item">
          <a href="/contact" style={{ textDecoration: 'none', color: 'white' }}>
            Contact
          </a>{' '}
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={30} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  )
}
export default NavBar
