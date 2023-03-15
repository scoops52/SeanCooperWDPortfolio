import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiJavascript,SiRedux } from 'react-icons/si';
import './LogoCube.scss'


const LogoCube = () => {
  return (
    <div className='cube-container'>
    <div className='cubespinner'>
        <div className="front">
            <FaHtml5 color='#F06529'/>
        </div>
        <div className="right">
            <FaReact color='#61DBFB'/>
        </div>
        <div className="left">
            <SiJavascript color='#f7df1e'/>
        </div>
        <div className="top">
            <FaCss3Alt color='#28A4D9'/>
        </div>
        <div className="bottom">
            <FaBootstrap color='#712cf9'/>
        </div>
        <div className="back">
            <SiRedux color='#00a7e5'/>
        </div>
    </div>
    </div>
  )
}

export default LogoCube