import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [nameTouched, setNameTouched] = useState(false)
  const [subject, setSubject] = useState('')
  const [subjectTouched, setSubjectTouched] = useState(false)
  const [email, setEmail] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [message, setMessage] = useState('')
  const [messageTouched, setMessageTouched] = useState(false)

  const formRef = useRef()

  const nameIsValid = name.trim() !== ''
  const nameInputIsInvalid = !nameIsValid && nameTouched

  const subjectIsValid = subject.trim() !== ''
  const subjectInputIsInvalid = !subjectIsValid && subjectTouched

  const messageIsValid = message.trim() !== ''
  const messageInputIsInvalid = !messageIsValid && messageTouched

  const emailIsValid = email.trim() !== '' && email.includes('@')
  const emailInputIsInvalid = !emailIsValid && emailTouched

  let formIsValid = false

  if (nameIsValid && subjectIsValid && messageIsValid && emailIsValid) {
    formIsValid = true
  }

  const nameInputBlurHandler = (event) => {
    setNameTouched(true)
  }

  const subjectInputBlurHandler = (event) => {
    setSubjectTouched(true)
  }

  const messageInputBlurHandler = (event) => {
    setMessageTouched(true)
  }

  const emailInputBlurHandler = (event) => {
    setEmailTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    setNameTouched(true)

    if (!nameIsValid) {
      return
    }

    setName('')
    setNameTouched(false)
    setSubject('')
    setSubjectTouched(false)
    setMessage('')
    setMessageTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  const subjectInputClasses = subjectInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  const messageInputClasses = messageInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

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
          window.location.reload(false)
          console.log('message successfully sent')
        },
        (error) => {
          alert('failed to send the message, pls try again')
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <form ref={formRef} onSubmit={formSubmissionHandler}>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              onBlur={nameInputBlurHandler}
            />
            {nameInputIsInvalid && (
              <p className="text-danger">Name must not be empty.</p>
            )}
          </li>
          <li>
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="form-control"
              onChange={(e) => setSubject(e.target.value)}
              onBlur={subjectInputBlurHandler}
            />
            {subjectInputIsInvalid && (
              <p className="text-danger">Subject must not be empty.</p>
            )}
          </li>
          <li>
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={emailInputBlurHandler}
            />
            {emailInputIsInvalid && (
              <p className="text-danger">
                Email must not be empty, must include '@'.
              </p>
            )}
          </li>
          <li>
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              className="form-control"
              onChange={(e) => setMessage(e.target.value)}
              onBlur={messageInputBlurHandler}
            />
            {messageInputIsInvalid && (
              <p className="text-danger">Message must not be empty.</p>
            )}
          </li>
          <li>
            <button
              disabled={!formIsValid}
              onClick={(e) => {
                handleSubmit(e)
                setMessage()
              }}
              type="submit"
              value="send"
              className="flat-button"
            >
              Send
            </button>
          </li>
        </ul>
      </form>
    </div>
  )
}
