import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import './NavBar.css'
// import Pix from '../../assets/images/img8.jpg'

const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className="navbar">
      <div className="logo">
        <h1>K-Math</h1>
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

      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/kazmatics/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://github.com/amuzatk" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://twitter.com/AmuzatKazeem"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
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
