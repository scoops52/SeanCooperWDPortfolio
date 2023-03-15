import React from 'react';
import { images } from '../../constants';
import './Home.scss';
import Services from './Services/Services';
import Title from './Title/Title';

const Home = () => {
  return (
    <>
    <div className='app__home'>
      <div className='app__header-text'>
        <Title text='<Create Your {World}/>' />
        <p className='app__header-p'>Websites || Front End Web Applications</p>
      </div>
      <div className='app__header-img'>
        
        <img src={images.universeLg} alt="universe" />
        <div className="image-text">
          <p> "Small World, Big Universe"<br/>  Taken by my good friend, Lawrence Ma. <br/> Stinson Beach, CA </p>
        </div>
        
        
        
      </div>
    </div>
    
        <Services />

    </>
  )
}

export default Home