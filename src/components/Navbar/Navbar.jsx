import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss'
import { images } from '../../constants'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => open ? setOpen(false) : setOpen(true);
 
  return (
    <nav className='app__navbar'>
      <NavLink
        className='app__navbar-logo'
        to='/'
      >
        <div className='logo'>
          <img src={images.logoWhite} alt='logo' />
        </div>
        {/* <div className='logo-hover'>
          <img src={images.logoGrey} alt='logo' />
        </div> */}
      </NavLink>
      <ul className='app__navbar-links'>
        {['about', 'skills', 'portfolio', 'contact'].map((item) => (
          <li key={`link-{item}`}>
            <NavLink to={`${item}`}>{item}</NavLink>
          </li>
        ))}
      </ul>


      {/* <div className='app__navbar-links'>
          
            <div className="li">
              <NavLink
              className='app__flex p-text link'
              to='about'
              >
              
                About
              </NavLink>
            </div>
          
          
            <div className="li">
              
              <NavLink
              className='app__flex p-text link'
              to='skills'
              >
              
                Skills
              </NavLink>
            </div>
          
          
            <div className="li">
              
              <NavLink
              className='app__flex p-text link'
              to='portfolio'
              >
              
                Portfolio
              </NavLink>
            </div>
          
          
            <div className="li">
              
              <NavLink
              className='app__flex p-text link'
              to='contact'
              >
              
                Contact
              </NavLink>
            </div>
            <div className='app__navbar-socials' >
              <Link to='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                <AiOutlineLinkedin size={25} className='social'/>
              </Link>
              <Link to='https://github.com/' target='_blank' rel='noopener noreferrer'>
                <AiOutlineGithub size={25} className='social'/>
              </Link>
        </div>
        </div> */}
      <div className='app__navbar-menu'>
        { !open ? 
        <HiMenuAlt4 onClick={handleClick} />
        :
        <HiX onClick={handleClick} /> }
      </div>
      <div className='app__navbar-dropdown'>
        {open && (
          <motion.div
            whileInview={{ x: [300, 0] }}
            transition={{ durtation: 0.85, ease: 'easeOut' }}
          >
            <ul>
              {['about', 'skills', 'portfolio', 'contact'].map((item) => (
                <li key={`link-{item}`}>
                  <NavLink to={`${item}`}>{item}</NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <div className='app__navbar-socials' >
        <Link to='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
          <AiOutlineLinkedin size={25} className='social' />
        </Link>
        <Link to='https://github.com/' target='_blank' rel='noopener noreferrer'>
          <AiOutlineGithub size={25} className='social' />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar