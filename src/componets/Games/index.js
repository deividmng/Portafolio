import React, { useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import F1 from '../../assets/images/game1.png'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { faCss3, faGithub, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'
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
      return 'https://arkanoidgame22.netlify.app/'
    } else {
      return 'https://link-por-defecto.com'
    }
  }

  const getTextForLink = (imageSrc) => {
    if (imageSrc === F1) {
      return 'Link to Breakout Master Game'
    } else {
      return 'Link por defecto'
    }
  }

  const getParagraphsForImage = (imageSrc) => {
    if (imageSrc === F1) {
      return [
        <div className="explain" key={0}>
          <p>
            Breakout Master is an exciting style game that combines action, skill, and strategy. The main objective
            of the game is to destroy all the bricks on the screen using a bouncing ball and a paddle controlled by the player.
          </p>
          <p>
            The player controls a horizontal paddle to bounce a ball and destroy bricks arranged on the screen. The ball bounces realistically,
            and the paddle moves with the left and right keys or the mouse. The game includes multiple levels with varied brick arrangements
            and special features such as bonuses and paddle transformations. Scores and lives are displayed, and the game ends if all lives are lost.
            Additionally, there are special events like increasing the paddle size based on the achieved score. The code handles collision detection,
            updates the game state in an animation loop, and displays Game Over or Victory messages based on the player's performance.
          </p>
          <div className='iconos'>
            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            <FontAwesomeIcon icon={faHtml5} style={{ marginRight: '30px', marginLeft: '30px' }} color="#F06529" />
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            <div className='iconos-link'>
              <a target="_blank" rel="noreferrer" href="https://github.com/deividmng/ARKANOID">
                <FontAwesomeIcon icon={faGithub} className='icono' color="#888888" />
                <span>Link to Github</span>
              </a>
            </div>
          </div>
        </div>,
      ]
    } else {
      return [<p key={0}>Content for other images goes here</p>]
    }
  }

  const paragraphs = getParagraphsForImage(currentImage)

  return (
    <div className="proyect-container">
      <div className="content ">
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
            <img className="" src={F1} alt="developer" />
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
