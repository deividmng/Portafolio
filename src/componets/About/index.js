import './index.scss'

import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders/dist/react-loaders';
const About = () => {
  const [letterClass, setLetterClass] =  useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    // Limpiar el temporizador cuando el componente se desmonta o cuando la clase ya se ha cambiado
    return () => clearTimeout(timeoutId);
}, []);

    return (
         // Rmb open the loader <> and close at the end 
    <> 
        <div className='container about-page'>
            <div className='text-zone'>
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
             <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            tell more about me,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxx
          </p>
            </div>

            <div className='stage-cube-cont'>
              <div className='cubespinner'>
                <div className='face1'>
                  <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className='face2'>
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className='face3'>
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face4'>
                  <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                </div>
                <div className='face5'>
                <FontAwesomeIcon icon= {faGithub} color="#EC4D28"/>
                </div>
                <div className='face6'>
                <FontAwesomeIcon icon= {faSass}  color="#FF69B4"/>
                </div>
              </div>
            </div>
       
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default About