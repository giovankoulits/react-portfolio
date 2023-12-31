import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import ParticlesBg from './Particles/ParticlesBg'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <div className="eighty-percent">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am a front-end developer who loves to seamlessly integrate
              modern design patterns with cutting edge web technologies.
            </p>
            <p align="LEFT">
              I have experience as a web designer and frontend developer. Tools
              that i use include:{' '}
              <span className="skills">Javascript, React, SCSS, Git</span> and
              more.
            </p>
            <p>I enjoy working with teams as well as solo! </p>
            <Link to="/work" className="flat-button">
              VISIT GALLERY
            </Link>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="showMe">
            <ParticlesBg />
            <div className="cubespinner ">
              <div className="face1">
                <FontAwesomeIcon icon={faWordpress} color="#41A2CA" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
