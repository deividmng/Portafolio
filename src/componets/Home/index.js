import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import D3 from '../../assets/images/D (doble) logo.svg'
import './index.scss';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'



const Home = () => {
  
    const [letterClass, setLetterClass] =  useState('text-animate')
    const nameArray = ['','a','v','i','d']
    const jobArray = ['W','e','b', ' ','D','e','v','e','l','o','p','e','r']
    
    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Limpiar el temporizador cuando el componente se desmonta o cuando la clase ya se ha cambiado
        return () => clearTimeout(timeoutId);
    }, []);
    

    return (
     <> 
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
              
                <img   className="letra-d"  src={D3} alt='letraD'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                 <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                <br/>
                </h1>
                <h2>Full-stack web developer</h2>
                <Link to="/contact" className='flat-buttom'>CONTACT ME</Link>
            </div>
           
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
       


      <Loader type="pacman"/>
        </>
    )
}

export default Home