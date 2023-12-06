import React, { useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import F1 from '../../assets/images/to-do.png'
import F2 from '../../assets/images/to-do2.png'
import F3 from '../../assets/images/last.png'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    // Aquí puedes ajustar las URL según tus necesidades
    if (imageSrc === F1) {
      return 'https://to-do-app22.netlify.app/'
      
    } else if (imageSrc === F2) {
      return 'https://to-do-app22.netlify.app/'
    } else if (imageSrc === F3) {
      return 'https://www.vempo.site/'
    } else {
      return 'https://link-por-defecto.com'
    }
  }


  const getTextForLink = (imageSrc) => {
    // Puedes ajustar los textos según tus necesidades
    if (imageSrc === F1) {
      return 'Link to Proyect To Do '
    } else if (imageSrc === F2) {
      return 'Link to Proyect To Do'
    } else if (imageSrc === F3) {
      return 'Link to Proyect Vempo'
    } else {
      return 'Link por defecto'
    }
  }

  const getParagraphsForImage = (imageSrc) => {
    // Aquí puedes ajustar el contenido de los párrafos según tus necesidades
    if (imageSrc === F1) {
      return [
        <div className="explain">
          <p>
            This app is a to-do list (ToDo app) that allows users to add, edit,
            delete, and mark their tasks as completed. It facilitates efficient
            management of daily activities by providing an intuitive and
            user-friendly interface. Users can input new tasks through the input
            interface, and the app offers the flexibility to edit the content of
            existing tasks. Additionally, the deletion feature allows users to
            get rid of unwanted tasks.
          </p>
          <p >
            The ability to mark tasks as completed provides a visual way to
            track progress. The app features an editing function that allows
            users to modify existing tasks, adapting to changes or updates. The
            integration of Toastify notifications enhances the user experience
            by providing clear and concise messages, such as successful deletion
            confirmations or task updates.
          </p>
          <p>
            The app uses local storage to preserve tasks even after closing the
            browser window. This ensures that users can consistently access and
            manage their tasks. With a clean and attractive design, the ToDo app
            provides a practical and effective solution for organizing daily
            tasks.
          </p>
        </div>
      ]
    } else if (imageSrc === F2) {
      return [
        <div className="explain">
        <p>
          This app is a to-do list (ToDo app) that allows users to add, edit,
          delete, and mark their tasks as completed. It facilitates efficient
          management of daily activities by providing an intuitive and
          user-friendly interface. Users can input new tasks through the input
          interface, and the app offers the flexibility to edit the content of
          existing tasks. Additionally, the deletion feature allows users to
          get rid of unwanted tasks.
        </p>
        <p >
          The ability to mark tasks as completed provides a visual way to
          track progress. The app features an editing function that allows
          users to modify existing tasks, adapting to changes or updates. The
          integration of Toastify notifications enhances the user experience
          by providing clear and concise messages, such as successful deletion
          confirmations or task updates.
        </p>
        <p>
          The app uses local storage to preserve tasks even after closing the
          browser window. This ensures that users can consistently access and
          manage their tasks. With a clean and attractive design, the ToDo app
          provides a practical and effective solution for organizing daily
          tasks.
        </p>
      </div>
      ]
    } else if (imageSrc === F3) {
      return [
        <div className="explain">
          <p>
            This project is conceived as an interactive experience that empowers
            users by offering them the opportunity to unleash their creativity
            through the creation of shapes with a wide palette of colors. The
            application not only limits itself to the static creation of forms
            but goes beyond by demanding dynamic movements and manipulations of
            the generated objects.
          </p>

          <p>
            In the development of this application, special attention has been
            dedicated to the front-end, where visual elements come to life. An
            attractive and responsive design has been implemented using advanced
            tools such as Bootstrap, HTML, and CSS. These elements not only
            provide a visually pleasing interface but also ensure an intuitive
            and user-friendly experience.
          </p>
          <p>
            On the other hand, in the back end, robust and versatile
            technologies such as Ruby on Rails and JavaScript have been employed
            to manage the underlying logic of the application. These
            technologies not only offer robustness and efficiency but also
            facilitate the interactivity necessary for users to fully enjoy the
            experience of creating dynamic shapes.
          </p>
        </div>,
      ]
    } else {
      return [
        'Párrafo 1 por defecto',
        'Párrafo 2 por defecto',
        'Párrafo 3 por defecto',
      ]
    }
  }

  const paragraphs = getParagraphsForImage(currentImage)

  return (
    <div className="proyect-container">
      <div className="content ">
        <Slider
          {...settings}
          beforeChange={(oldIndex, newIndex) => {
            // Antes de cambiar la imagen, actualiza el estado de la imagen actual
            switch (newIndex) {
              case 0:
                setCurrentImage(F1)
                break
              case 1:
                setCurrentImage(F3)
                break
              case 2:
                setCurrentImage(F2)
                break
              default:
                setCurrentImage(F1)
            }
          }}
        >
          <div>
            <img className="max" src={F1} alt="developer" />
          </div>
          <div>
            <img className="max" src={F3} alt="developer" />
          </div>
          <div>
            <img className="max" src={F2} alt="developer" />
          </div>
        </Slider>
        <div className="link">
          <Link to={getLinkForImage(currentImage)} className="flat-buttom">
          {getTextForLink(currentImage)}
          </Link>
        </div>
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
