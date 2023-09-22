import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/name.png'
// we are getting the fontawesome import npm is on pkjs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';


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

        

    </nav>

  </div>
);

export default Sidebar;
