import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/name.png'
// we are getting the fontawesome import npm is on pkjs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faUser, faEnvelope, faP , faGamepad, faBrain } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


// import { FaGamepad } from "react-icons/fa";


//here are importing rmb have to be the same name  


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt='logo'/>
      <img   className="sub-logo"  src={LogoSubtitle} alt='name'/>
    </Link>
    <nav>

        <NavLink exact="true" activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d42" />
        </NavLink>
      
        <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d42" />
        </NavLink>

        <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d42" />
        </NavLink>

        <NavLink exact={true} activeClassName="active" className="proyect-link" to="/proyect">
          <FontAwesomeIcon icon={faP} color="#4d4d42" />
        </NavLink>
        

        <NavLink exact={true} activeClassName="active" className="games-link" to="/games">
          <FontAwesomeIcon icon={faGamepad} color="#4d4d42" />
        </NavLink>

        <NavLink exact={true} activeClassName="active" className="brain-link" to="/brain">
          <FontAwesomeIcon icon={faBrain} color="#4d4d42" />
        </NavLink>
        
      
      
        

    </nav>
    <ul>
      <li>
        <a  
         target="_blank"
          rel="noreferrer"
          href='https://www.linkedin.com/in/david-haro-7981ab1a5/'
        >
          <FontAwesomeIcon icon={faLinkedin} color=' #0a66c2' className="contact-linkedin"/>
        </a>
      </li>

      <li>
        <a  
         target="_blank"
          rel="noreferrer"
          href='https://www.linkedin.com/in/david-haro-7981ab1a5/'
        >
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className="contact-Github"/>
        </a>
      </li>
    </ul>

  </div>
);

export default Sidebar;
