import { useState } from 'react'

import './Project.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Proj1 from '../../assets/images/proj1.png'
import Proj2 from '../../assets/images/proj2.png'
import Proj3 from '../../assets/images/proj3.png'
import Proj4 from '../../assets/images/proj4.png'

export default function Project() {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container project-page">
        <div className="text-style">
          <h1 className="personal">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'P',
                'e',
                'r',
                's',
                'o',
                'n',
                'a',
                'l',
                '',
                'P',
                'r',
                'o',
                'j',
                'e',
                'c',
                't',
              ]}
              idx={15}
            />
          </h1>
          <h2 className="rest">RESTful API AND ASSOCIATED ENDPOINTS</h2>

          <a
            href="https://my-news-app-beta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Project Link</button>
          </a>

          <p>
            A friend of mine at Clane gave me this project, tagged 'Software
            Engineer Challenge' to work on. It was centered around testing the
            dexterity of an Engineer at dealing with consumption of RESTful API,
            its associated endpoints, and ability to handle needed packages.
          </p>
          <p align="LEFT">
            Though, it was indeed challenging as I encountered lots of
            bottlenecks while executing the project. However, I triuphed.
          </p>
          <p align="LEFT">
            Its more advanced version is in the pipeline, kindly be on a
            lookout!!!
          </p>
          <h3>Project Requirements:</h3>
          <ul className="task-list">
            <li>A set of simple news API to work with was provided.</li>
            <li>
              Required to create a simple react-js app using the API given.
            </li>
            <li>
              A simple landing page that would display all the news (Paginated)
              with a next and back links.
            </li>
            <li>
              Clicking on any of the news would display a single news in a
              separate page with the images and comments. Also required to
              create a form to add a new comment to the news. Also ability to
              edit/delete any comment on the news.
            </li>
            <li>
              Also required to display the images on the news view page as a
              slider.
            </li>
            <li> A form to Create and update news.</li>
          </ul>
          <a
            href="https://my-news-app-beta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="b">Project Link</button>
          </a>
        </div>
        <div className="stage-cube-cont-project">
          <div className="cubespinner-project">
            <div className="pro1">
              <img src={Proj1} alt="k" width={200} height={200} />
            </div>
            <div className="pro2">
              <img
                src={Proj2}
                alt="k"
                // className="face3"
                width={200}
                height={200}
              />
            </div>
            <div className="pro3">
              <img
                src={Proj3}
                alt="k"
                // className="face3"
                width={200}
                height={200}
              />
            </div>
            <div className="pro4">
              <img
                src={Proj4}
                // className="face4"
                alt="k"
                width={200}
                height={200}
              />
            </div>
            <div className="pro5">
              <img
                src={Proj1}
                // className="face5"
                alt="k"
                width={200}
                height={200}
              />
            </div>
            <div className="pro6">
              <img
                src={Proj2}
                // className="face6"
                alt="k"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
