import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './logo'
import './index.scss';
import Loader from 'react-loaders';



const Home = () => {

    const [letterClass, setLetterClass] =  useState('text-animate')
    const nameArray = ['d','a','v','i','d']
    const jobArray = ['w','e','b', ' ','d','e','v','e','l','o','p','e','r']
    
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
                <img src={LogoTitle} alt='developer'/>
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
            <Logo/>
        </div>
      <Loader type="pacman"/>
        </>
    )
}

export default Home