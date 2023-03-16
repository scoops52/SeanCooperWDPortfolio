import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass, FaChevronDown, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiRedux } from 'react-icons/si';
import './ListSkills.scss';

const ListSkills = () => {
    return (
        <div className='skills-list'>
            <div className='skill-pair'>
                <ul>
                    <li className='html'>
                        <FaHtml5 color='#F06529' /> HTML5
                    </li>
                </ul>
                <ul>
                    <li className='git'>
                        <FaGitAlt color='#F1502F' /> Git
                    </li>
                </ul>
            </div>
            <div className='skill-pair'>
                <ul>
                    <li className='javascript'>
                        <   SiJavascript color='#f7df1e' /> JavaScript ES6+
                    </li>
                </ul>
                <ul className='dropdown'>
                    <li className='react'>
                        <FaReact color='#61DBFB' /> React <span><FaChevronDown size={10} /></span>
                        <ul className='sublist'>
                            <li>
                                React Router
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="skill-pair"></div>
        
            <ul>
                <li className='dropdown'>
                    <FaCss3Alt color='#28A4D9' /> CSS3 <span><FaChevronDown size={10} /></span>
                    <ul className='sublist'>
                        <li>
                            <FaSass color='#c69' /> Sass
                        </li>
                        <li>
                            < FaBootstrap color='#712cf9' /> Bootstrap
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className='dropdown'>
                <li className='redux'>
                    <SiRedux color='#00a7e5' /> Redux <span><FaChevronDown size={10} /></span>
                    <ul className='sublist'>
                        <li>
                            Redux Toolkit
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}

export default ListSkills