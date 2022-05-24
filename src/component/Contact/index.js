import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
// import emailjs from '@emailjs/browser'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const formRef = useRef()

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('test-animate-hover')
  //     }, 4000)
  //   }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_pdnd8tj',
        'template_u1o33qi',
        formRef.current,
        'QMfRT6_HemTNXX6z5'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message successfully sent')
          //   window.location.reload(false)
          //   console.log("message sent");
        },
        (error) => {
          //   alert('failed to send the message, pls try again')
          console.log(error.text)
        }
      )
  }

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
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={formRef} onClick={handleSubmit}>
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
            </form>
          </div>
          {/* <div className="contact-form">
            <form ref={formRef} onClick={handleSubmit}>
              <ul className="half">
                <li>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="user_subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="messsage"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="send" className="flat-button" />
                </li>           
              </ul>
            </form>
          </div> */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
