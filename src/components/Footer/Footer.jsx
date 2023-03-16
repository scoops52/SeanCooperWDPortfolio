import React from 'react';
import {  NavLink } from 'react-router-dom';

import './Footer.scss'


const Footer = () => {
  return (
    <div className="app__footer">
        <div className='app__footer-copyright'>
            <h4>Made from scratch by Sean &copy; 2023 </h4>
        </div>
        <div className='app__footer-contact'>
            <NavLink to='contact'>
                Contact Me
            </NavLink>
        </div>
        {/* <div className='app__footer-socials'>
        <Link to='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
          <AiOutlineLinkedin size={25} className='social' />
        </Link>
        <Link to='https://github.com/' target='_blank' rel='noopener noreferrer'>
          <AiOutlineGithub size={25} className='social' />
        </Link>
        </div> */}
    </div>
  )
}

export default Footer