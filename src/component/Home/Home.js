import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Loader from 'react-loaders'
import Typical from 'react-typical'

import './Home.scss'
import Pics from './logo'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-area">
          {' '}
          <span className="primary-text">
            {''}
            Hello, <br /> <strong className="i"> I'm </strong>{' '}
            <span className="highlighted-text">Kazeem</span>
          </span>
          <span>
            {''}
            <h1 className="moving">
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
                  'To mention a few...',
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
              href="Amuzat_Kazeem_cv.pdf"
              className="resume-button"
              download="Amuzat_kazeem_cv.pdf"
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

// import { Link } from 'react-router-dom'
// import React, { useState } from 'react'
// import Loader from 'react-loaders'
// import Typical from 'react-typical'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faLinkedin,
//   faGithub,
//   faYoutube,
//   faSkype,
//   faInstagram,
//   faGooglePlusSquare,
//   faTwitter,
// } from '@fortawesome/free-brands-svg-icons'

// import './Home.scss'
// import Pics from '../../assets/images/img8.jpg'

// const Home = () => {
//   return (
//     <div className="cont">
//       <div className="container home-page">
//         <div>
//           <img src={Pics} alt="" />
//         </div>
//         <div className="text-zone">
//           {' '}
//           <span className="primary-text">
//             {''}
//             Hello, <br /> <strong className="i"> I'm </strong>{' '}
//             <span className="k">Kazeem</span>
//           </span>
//           <span>
//             {''}
//             <h1>
//               {''}
//               <Typical
//                 loop={Infinity}
//                 steps={[
//                   'Front-End Developer',
//                   1000,
//                   'Enthusiastic Dev',
//                   1200,
//                   'React-JS Developer',
//                   1000,
//                   'JavaScript Engineer',
//                   1000,
//                   'To mention a few...',
//                   1000,
//                 ]}
//               />
//             </h1>
//           </span>
//           <div>
//             <Link to="/contact" className="flat-button">
//               CONTACT ME
//             </Link>
//           </div>
//           <div>
//             <a
//               href="Amuzat_Kazeem_cv.pdf"
//               className="resume-button"
//               download="Amuzat_Kazeem_cv.pdf"
//             >
//               GET RESUME
//             </a>
//           </div>
//           <div className="about">
//             <p>
//               I'm an ambitious Front-End Developer looking for a role in an
//               established IT firm.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <ul className="b">
//           <li className="b-1">
//             <a
//               href="https://www.linkedin.com/in/kazmatics/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//           </li>
//           <li className="b-2">
//             <a
//               href="https://github.com/amuzatk"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FontAwesomeIcon icon={faGithub} color="green" />
//             </a>
//           </li>
//           <li className="b-3">
//             <a
//               href="https://twitter.com/AmuzatKazeem"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FontAwesomeIcon icon={faTwitter} color="blue" />
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://ads.google.com/aw/campaigns/new/express?campaignId=11892391380&ocid=618705347&cmpnInfo=%7B%228%22%3A%222054aa56-12ab-4b1a-bf57-ea4525bf1257%22%7D&subid=ng-en-ha-aw-sk-c-bau%21o3~Cj0KCQjw1ZeUBhDyARIsAOzAqQKn8QyTkTpXIJPpkwG9ttQZnl43rYAZMOMRIb1JseTIj2eDyT9Zf9saAjP9EALw_wcB~121284246149~kwd-298854906879~12973051369~519253412581&step=cbss&euid=471094039&__u=4558734111&uscid=618705347&__c=1425674603&authuser=0&mode=signup&sourceid=emp"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FontAwesomeIcon icon={faGooglePlusSquare} color="#4d4d4e" />
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.youtube.com/channel/UCaDG7MSRJoieWaeCZ_5ZCKg"
//               rel="noreferrer"
//               target="_blank"
//             >
//               <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://secure.skype.com/portal/profile"
//               rel="noreferrer"
//               target="_blank"
//             >
//               <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
//             </a>
//           </li>
//         </ul>
//       </div>

//       <Loader type="pacman" />
//     </div>
//   )
// }

// export default Home
