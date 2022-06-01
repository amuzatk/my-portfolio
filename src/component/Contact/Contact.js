import Loader from 'react-loaders'
import { useState } from 'react'
import { MapContainer, Popup } from 'react-leaflet'
import { Marker, TileLayer } from 'react-leaflet'

import AnimatedLetters from '../AnimatedLetters'
import './Contact.scss'
import ContactForm from './ContactForm'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <main className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am open for freelance opportunities - particularly ambitious on
            large projects and team. However, if you have other request or
            question, kindly do not hesitate to contact me via email or any of
            my social media handles.
          </p>

          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
        <div className="info-map">
          Kazeem Amuzat,
          <br />
          Nigeria,
          <br />
          Flat 3, Quarters' Extension, Jemilu Lion Street, Kuje, <br />
          Federal Capital Territory, Abuja. <br />
          <span> E: amuzatk@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[8.87931, 7.23526]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[8.87931, 7.23526]}>
              <Popup>Kazeem says hello </Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

// import React from 'react'

// const Contact = () => {
//   return (
//     <>
//       <h1>Contact Page</h1>
//     </>
//   )
// }

// export default Contact
