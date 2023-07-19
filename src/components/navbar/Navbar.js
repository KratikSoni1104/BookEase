import React, { useContext } from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {

  const {user} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className='navbarContainer'>
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookEase</span>
        </Link>
            {!user &&  <div className='navItems'>
                <button className='navButtons'>Register</button>
                <button className='navButtons'>Login</button>
            </div>}
        </div>
    </div>
  )
}

export default Navbar