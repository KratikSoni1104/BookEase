import React, { useContext, useState } from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,  faBed,  faCar, faCircleXmark, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const {user} = useContext(AuthContext);
  //for menu
  const [openMenu , setOpenMenu] = useState(false);

  return (
    <div className='navbar' >
        <div className='navbarContainer'>
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookEase</span>
        </Link>
        <FontAwesomeIcon onClick={() => setOpenMenu(true)} className='menu' icon={faBars} />
        {openMenu && <div className='menuList'>
                      <FontAwesomeIcon className='menuClose' onClick={() => setOpenMenu(false)} icon={faCircleXmark} />
                    <div className='menuItems'>
                      <div className='headerListItem'>
                          <FontAwesomeIcon icon={faBed}/>
                          <span>Stays</span>
                      </div>
                      <div className='headerListItem'>
                          <FontAwesomeIcon icon={faPlane}/>
                          <span>Flights</span>
                      </div>
                      <div className='headerListItem'>
                          <FontAwesomeIcon icon={faCar}/>
                          <span>Car</span>
                      </div>
                      <div className='headerListItem'>
                          <FontAwesomeIcon icon={faBed}/>
                          <span>Attractions</span>
                      </div>
                      <div className='headerListItem'>
                          <FontAwesomeIcon icon={faTaxi}/>
                          <span>Airport taxis</span>
                      </div>
                    </div>
                </div>}
            {!user &&  <div className='navItems'>
                <button className='navButtons'>Register</button>
                <button className='navButtons'>Login</button>
            </div>}
        </div>
    </div>
  )
}

export default Navbar