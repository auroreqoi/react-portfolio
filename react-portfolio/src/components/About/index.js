import { faCss3, faFigma, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split([])}
              idx={15}
            />
          </h1>
          <p>
            A very ambitious an capable developer looking for a role in an established IT company
            with the opportunity to work with the latest technologies on challenging and diverse
            projects. I love Front-End but I'm more than capable in Back-End too.</p>
          <p>
            I'm confident in my own skills, born curious and always looking to learn new
            technologies and lot of things. Currently learning ReactJS and C# </p>
          <p>
            To define myself I'd say that I'm passionate. I love a lot of things and do
            everything do know even more about those. I love coding, Sports (Go Seahawks),
            tabletop RPG (currently mastering on D&D), videogames (waiting for Pokémon).
          </p>
        </div>

        <div className='state-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faFigma} color="#fff"/>
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color="EC4D28"/>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )

}

export default About
