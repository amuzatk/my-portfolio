import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Loader from 'react-loaders'
import Typical from 'react-typical'

import './index.scss'
import Pics from './logo'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          {' '}
          <span className="primary-text">
            {''}
            Hello, <br /> <strong className="i"> I'M </strong>{' '}
            <span className="highlighted-text">Kazeem</span>
          </span>
          <span>
            {''}
            <h1>
              {''}
              <Typical
                loop={Infinity}
                steps={[
                  'Front-End Developer',
                  1000,
                  'Enthusiastic Dev',
                  1200,
                  'React-JS Developer',
                  1000,
                  'JavaScript Engineer',
                  1000,
                  'Bootstrap Tooling Utilizer',
                  1000,
                  'To mention a few',
                  1000,
                ]}
              />
            </h1>
          </span>
          <div>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <div>
            <a
              href="kazcv.pdf"
              className="flat-button"
              download="Kazeem kazcv.pdf"
            >
              GET RESUME
            </a>
          </div>
        </div>
        <Pics />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
