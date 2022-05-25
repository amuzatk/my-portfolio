import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Popup } from 'react-leaflet'
import { Marker, TileLayer } from 'react-leaflet'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ContactForm from './ContactForm'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const formRef = useRef()

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('test-animate-hover')
  //     }, 4000)
  //   }, [])

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       'service_pdnd8tj',
  //       'template_u1o33qi',
  //       formRef.current,
  //       'QMfRT6_HemTNXX6z5'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         console.log('message successfully sent')
  //           window.location.reload(false)
  //           console.log("message sent");
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }

  return (
    <>
      <div className="container contact-page">
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
            {/* <form ref={formRef} onClick={handleSubmit}>
              <ul>
                <li>
                  <input type="text" placeholder="Name" name="user_name" />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                  />
                </li>
                <li>
                  <input type="text" placeholder="Email" name="user_email" />
                </li>
                <li>
                  <textarea rows="5" placeholder="Message" name="message" />
                </li>
                <li>
                  <button type="submit" value="send" className="flat-button">
                    Send
                  </button>
                </li>
              </ul>
            </form> */}
          </div>
        </div>
        <div className="info-map">
          Kazeem Amuzat,
          <br />
          Nigeria,
          <br />
          Flat 3, Quarters' Extension, Jemilu Lion Street, Kuje, <br />
          Federal Capital Terrotory, Abuja. <br />
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
