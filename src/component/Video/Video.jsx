import React from 'react'
import Vid from '../../assets/images/test-video.mp4'

import './Video.scss'

const Video = () => {
  return (
    <>
      {/* <section>
        <h1>My Video Resume</h1>

        <div className="video-container">
          <div className="video-overlay"></div>
          <video autoPlay loop muted>
            <source src={Vid} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section> */}

      <section>
        <input type="text" placeholder="Enter your name" />
        <input type="password" placeholder="Enter your password" />
        <input type="date" placeholder="Pick a date~" />
        <input type="time" placeholder="Set time" />
        <input type="color" placeholder="Pick your color" />
        <input type="file" />
      </section>
    </>
  )
}

export default Video
