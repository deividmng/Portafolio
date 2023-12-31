import './index.scss'
import F3 from '../../assets/images/to-do3.png'

import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
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
        <div className=' about-page'>
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
          <p className='lastP' >
            tell more about me,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxx
          </p>
            </div>

         
        
        </div>
        <div className='img-me' >
            <img  className='max' src={F3} alt="developer" />
          </div>
        
        <Loader type="pacman" />
    </>
    
    )
}

export default About