    import './index.scss';
    import Loader from 'react-loaders';
    import F1 from '../../assets/images/d.png';
    import F2 from '../../assets/images/d2.png'
    import { Link } from 'react-router-dom';
    import React, {useState} from 'react'
    import { 
        CarouselControl, 
        Carousel, 
        CarouselItem, 
        CarouselIndicators, 
    } from 'reactstrap'; 


    const Proyect = () => {
    
    return (
        
                


        <div className='proyect-container'>
            <div className='content'>
                <div className='slide-panel'>
                <img src={F1} alt='developer'/>
                </div>
                <div className='next'>
                    <Link to="https://www.vempo.site/" className='flat-buttom'>Link to Proyect</Link>
            
                </div>
            </div>

            <div className='explain'>
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
        </div>


        
    )
        
    }
    export default Proyect;
    