import './index.scss'
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
            <h1 className='about-me'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
             <p>
           
Graduate of Le Wagon bootcamp in London, I discovered the vastness of the programming world and its potential for infinite solutions
          </p>
          <p align="LEFT">
          Contact me for any inquiries. Frontend Developer. I started programming in early 2022, teaching myself initially, and later decided to formalize my education with courses focused solely on the front end.
          </p>
          <p className='lastP' >
          In 2023, I made the significant decision to undergo a major change and enrolled in Le wagon bootcamp. I acquired fundamental tools that have prepared me to take my first steps into the professional world.
          </p>
            </div>

         
        
        </div>
        <div>
          <div className="imagenPerfil "></div>
        </div>
        
        <Loader type="pacman" />
    </>
    
    )
}

export default About