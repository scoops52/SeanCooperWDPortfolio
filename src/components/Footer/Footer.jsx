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
    </div>
  )
}

export default Footer