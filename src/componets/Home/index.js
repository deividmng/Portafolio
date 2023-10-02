import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo.png';
import './index.scss';


const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I`m
                <img src={LogoTitle} alt='developer'/>
                David
                <br/>
                web developer
                </h1>
                <h2>Full-stak web developer</h2>
                <Link to="/contact" className='flat-buttom'>CONTACT ME</Link>
               
            </div>

        </div>
    );


}

export default Home