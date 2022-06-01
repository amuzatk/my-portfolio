import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faHtml5,
  faCss3,
  faGitAlt,
  faJsSquare,
  faAngular,
} from '@fortawesome/free-brands-svg-icons'

import './About.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="texts">
          <h1 className="a-text">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            A very ambitious Front-End Developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm unassuming, naturally curious, quietly confident, and
            perpetually working on sharpen my skills.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a computer simulation game lover, and a goal-getter.
          </p>
          <p>Looking up for awesome opportunities!!!</p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

// import { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faReact,
//   faHtml5,
//   faCss3,
//   faGitAlt,
//   faJsSquare,
//   faAngular,
// } from '@fortawesome/free-brands-svg-icons'

// import './About.scss'
// import AnimatedLetters from '../AnimatedLetters'
// import Loader from 'react-loaders'

// const About = () => {
//   const [letterClass, setLetterClass] = useState('text-animate')

//   return (
//     <div className="conta">
//       <div className="container about-page">
//         <div className="text">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
//               idx={15}
//             />
//           </h1>
//           <p>
//             A very ambitious Front-End Developer looking for a role in
//             established IT company with the opportunity to work with the latest
//             technologies on challenging and diverse projects.
//           </p>
//           <p align="LEFT">
//             I'm unassuming, naturally curious, quietly confident, and
//             perpetually working on sharpen my skills.
//           </p>
//           <p>
//             If I need to define myself in one sentence that would be a family
//             person, a computer simulation game lover, and a goal-getter.
//           </p>
//           <p>Looking up for awesome opportunities!!!</p>
//         </div>
//         <div className="stage-cube-cont">
//           <div className="cubespinner">
//             <div className="face1">
//               <FontAwesomeIcon icon={faReact} color="#DD0031" />
//             </div>
//             <div className="face2">
//               <FontAwesomeIcon icon={faHtml5} color="#F06529" />
//             </div>
//             <div className="face3">
//               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
//             </div>
//             <div className="face4">
//               <FontAwesomeIcon icon={faAngular} color="#5ED4F4" />
//             </div>
//             <div className="face5">
//               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
//             </div>
//             <div className="face6">
//               <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </div>
//   )
// }

// export default About
