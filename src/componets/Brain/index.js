import React, { useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import F1 from '../../assets/videos/React App - Google Chrome 2024-01-17 01-04-13.mp4'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const settings = {
  dots: true,
  infinite: true,
  speed: 1100,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Proyect = () => {
  const [currentImage, setCurrentImage] = useState(F1)

  const getLinkForImage = (imageSrc) => {
    if (imageSrc === F1) {
      return 'https://bespoke-conkies-d66be4.netlify.app/'
    } else {
      return 'https://link-por-defecto.com'
    }
  }

  const getTextForLink = (imageSrc) => {
    if (imageSrc === F1) {
      return 'Link to Project'
    } else {
      return 'Link por defecto'
    }
  }

  const getParagraphsForImage = (imageSrc) => {
    if (imageSrc === F1) {
      return [
        <div className="explain" key={0}>
          <p>
            This project is part of my React learning process, where I'm working
            on small projects based on JavaScript. It's not finished yet, but I
            hope to have it ready soon.
          </p>
          <div className="iconos">
            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ marginRight: '30px', marginLeft: '30px' }}
              color="#F06529"
            />
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            <FontAwesomeIcon
              icon={faReact}
              style={{ marginRight: '30px', marginLeft: '30px' }}
              color="#5ED4F4"
            />
            <FontAwesomeIcon icon={faSass} color="#FF69B4" />
            <div className="iconos-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/deividmng/MiniProyectsJS/tree/main"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="icono"
                  color="#888888"
                />
                <span>Link to Github</span>
              </a>
            </div>
          </div>
        </div>,
      ]
    } else {
      return [<p key={0}>Content for other videos goes here</p>]
    }
  }

  const paragraphs = getParagraphsForImage(currentImage)

  return (
    <div className="">
      <div className="content-video ">
        <Slider
          {...settings}
          beforeChange={(oldIndex, newIndex) => {
            switch (newIndex) {
              case 0:
                setCurrentImage(F1)
                break
              default:
                setCurrentImage(F1)
            }
          }}
        >
          <div>
            <video className="video-brain" controls>
              <source src={F1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Slider>
      </div>
      <div className="link">
        <Link to={getLinkForImage(currentImage)} className="flat-buttom">
          {getTextForLink(currentImage)}
        </Link>
      </div>

      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Proyect
