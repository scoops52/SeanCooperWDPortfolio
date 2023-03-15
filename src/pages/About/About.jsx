import React from 'react';
import { images } from '../../constants';
import './About.scss';

const About = () => {
  return (
    <div className='app__about'>
      <div className='app__about-text'>
        <h1>About Sean</h1>
        <p> Hello, and welcome to my site. I am a front end web developer looking to help solve problems and create amazing things. I am very passionate about delivering the best user experience possible, while also leaving room for creativity and innovation. I also love to learn, and I look forward to improving my skills and knowledge with every project I take on. Outside of web development I live a very active lifestyle. I play rugby (see right) and am also a Certified Strength and Conditioning Specialist. So bonus points if your web development needs cross over with sports or fitness! </p>
      </div>
      <div className="app__about-img">
        <img src={images.rugbyHeadshot} alt="" />
      </div>
    </div>
  )
}

export default About