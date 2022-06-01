import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faInstagram,
  faGooglePlusSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faHandsHoldingCircle,
} from '@fortawesome/free-solid-svg-icons'

import Pix from '../../assets/images/img8.jpg'
import './index.scss'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Pix} alt="logo" className="pix" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="project-link" to="/project">
        <FontAwesomeIcon icon={faHandsHoldingCircle} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul className="social-list">
      <li>
        <a
          href="https://www.linkedin.com/in/kazmatics/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://github.com/amuzatk" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/AmuzatKazeem"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://ads.google.com/aw/campaigns/new/express?campaignId=11892391380&ocid=618705347&cmpnInfo=%7B%228%22%3A%222054aa56-12ab-4b1a-bf57-ea4525bf1257%22%7D&subid=ng-en-ha-aw-sk-c-bau%21o3~Cj0KCQjw1ZeUBhDyARIsAOzAqQKn8QyTkTpXIJPpkwG9ttQZnl43rYAZMOMRIb1JseTIj2eDyT9Zf9saAjP9EALw_wcB~121284246149~kwd-298854906879~12973051369~519253412581&step=cbss&euid=471094039&__u=4558734111&uscid=618705347&__c=1425674603&authuser=0&mode=signup&sourceid=emp"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGooglePlusSquare} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCaDG7MSRJoieWaeCZ_5ZCKg"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://secure.skype.com/portal/profile"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar

// import { Link, NavLink } from 'react-router-dom'
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
// import {
//   faHome,
//   faUser,
//   faEnvelope,
//   faHandsHoldingCircle,
// } from '@fortawesome/free-solid-svg-icons'

// import Pix from '../../assets/images/img8.jpg'
// import './index.scss'

// const Sidebar = () => (
//   <div className="nav-bar">
//     <Link className="logo" to="/">
//       <img src={Pix} alt="logo" className="pix" />
//     </Link>
//     <nav>
//       <NavLink exact="true" activeclassname="active" to="/">
//         <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//       </NavLink>
//       <NavLink activeclassname="active" className="about-link" to="/about">
//         <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//       </NavLink>
//       <NavLink activeclassname="active" className="project-link" to="/project">
//         <FontAwesomeIcon icon={faHandsHoldingCircle} color="#4d4d4e" />
//       </NavLink>
//       <NavLink activeclassname="active" className="contact-link" to="/contact">
//         <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//       </NavLink>
//     </nav>
//     <ul>
//       <li>
//         <a
//           href="https://www.linkedin.com/in/kazmatics/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
//         </a>
//       </li>
//       <li>
//         <a href="https://github.com/amuzatk" target="_blank" rel="noreferrer">
//           <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
//         </a>
//       </li>
//       <li>
//         <a
//           href="https://twitter.com/AmuzatKazeem"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
//         </a>
//       </li>
//       <li>
//         <a
//           href="https://ads.google.com/aw/campaigns/new/express?campaignId=11892391380&ocid=618705347&cmpnInfo=%7B%228%22%3A%222054aa56-12ab-4b1a-bf57-ea4525bf1257%22%7D&subid=ng-en-ha-aw-sk-c-bau%21o3~Cj0KCQjw1ZeUBhDyARIsAOzAqQKn8QyTkTpXIJPpkwG9ttQZnl43rYAZMOMRIb1JseTIj2eDyT9Zf9saAjP9EALw_wcB~121284246149~kwd-298854906879~12973051369~519253412581&step=cbss&euid=471094039&__u=4558734111&uscid=618705347&__c=1425674603&authuser=0&mode=signup&sourceid=emp"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <FontAwesomeIcon icon={faGooglePlusSquare} color="#4d4d4e" />
//         </a>
//       </li>
//       <li>
//         <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
//           <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
//         </a>
//       </li>
//       <li>
//         <a
//           href="https://www.youtube.com/channel/UCaDG7MSRJoieWaeCZ_5ZCKg"
//           rel="noreferrer"
//           target="_blank"
//         >
//           <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
//         </a>
//       </li>
//       <li>
//         <a
//           href="https://secure.skype.com/portal/profile"
//           rel="noreferrer"
//           target="_blank"
//         >
//           <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
//         </a>
//       </li>
//     </ul>
//   </div>
// )

// export default Sidebar

// import { Link, NavLink } from 'react-router-dom'
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
// import {
//   faHome,
//   faUser,
//   faEnvelope,
//   faHandsHoldingCircle,
// } from '@fortawesome/free-solid-svg-icons'

// import Pix from '../../assets/images/img8.jpg'
// import './index.scss'

// const Sidebar = () => (
//   <div className="nav-bar">
//     <Link className="logo" to="/">
//     </Link>
//     <nav>
//       <NavLink exact="true" activeclassname="active" to="/">
//         <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//       </NavLink>
//       <NavLink activeclassname="active" className="about-link" to="/about">
//         <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//       </NavLink>
//       <NavLink activeclassname="active" className="project-link" to="/project">
//         <FontAwesomeIcon icon={faHandsHoldingCircle} color="#4d4d4e" />
//       </NavLink>
//       <NavLink activeclassname="active" className="contact-link" to="/contact">
//         <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//       </NavLink>
//     </nav>
// <ul>
//   <li>
//     <a
//       href="https://www.linkedin.com/in/kazmatics/"
//       target="_blank"
//       rel="noreferrer"
//     >
//       <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
//     </a>
//   </li>
//   <li>
//     <a href="https://github.com/amuzatk" target="_blank" rel="noreferrer">
//       <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
//     </a>
//   </li>
//   <li>
//     <a
//       href="https://twitter.com/AmuzatKazeem"
//       target="_blank"
//       rel="noreferrer"
//     >
//       <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
//     </a>
//   </li>
//   <li>
//     <a
//       href="https://ads.google.com/aw/campaigns/new/express?campaignId=11892391380&ocid=618705347&cmpnInfo=%7B%228%22%3A%222054aa56-12ab-4b1a-bf57-ea4525bf1257%22%7D&subid=ng-en-ha-aw-sk-c-bau%21o3~Cj0KCQjw1ZeUBhDyARIsAOzAqQKn8QyTkTpXIJPpkwG9ttQZnl43rYAZMOMRIb1JseTIj2eDyT9Zf9saAjP9EALw_wcB~121284246149~kwd-298854906879~12973051369~519253412581&step=cbss&euid=471094039&__u=4558734111&uscid=618705347&__c=1425674603&authuser=0&mode=signup&sourceid=emp"
//       target="_blank"
//       rel="noreferrer"
//     >
//       <FontAwesomeIcon icon={faGooglePlusSquare} color="#4d4d4e" />
//     </a>
//   </li>
//   <li>
//     <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
//       <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
//     </a>
//   </li>
//   <li>
//     <a
//       href="https://www.youtube.com/channel/UCaDG7MSRJoieWaeCZ_5ZCKg"
//       rel="noreferrer"
//       target="_blank"
//     >
//       <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
//     </a>
//   </li>
//   <li>
//     <a
//       href="https://secure.skype.com/portal/profile"
//       rel="noreferrer"
//       target="_blank"
//     >
//       <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
//     </a>
//   </li>
// </ul>
//   </div>
// )

// export default Sidebar
