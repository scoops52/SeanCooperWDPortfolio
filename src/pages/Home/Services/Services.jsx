import React from 'react';
import { images } from '../../../constants';
import './Services.scss'
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {
  return (
   <div className='app__services flex__center'>
        <div className='app__services-title'>
            <hr />
            <h3>Areas of Expertise</h3>
            <hr />
        </div>
        <div className='app__services-p'>
        <p>&#40;Hover for more info&#41;</p>
        </div>
        <div className='app__services-deck flex__center'>
        <ServicesCard
        image={images.websiteUnsplash}
        title='Responsive Personal and Business Websites'
        desc='Bring your online vision to life with a stylish, mobile-friendly, functional website. With experience from CMS like Wordpress, to complex JavaScript frameworks like React, any website goal can be accomplished.  ' />
        <ServicesCard
        image={images.eCommerce}
        title='Dynamic Websites like eCommerce or Blogs'
        desc='Always wanted to share your travel experiences? Trying to make some extra cash selling merchandise? Leave the site building to a professional so you can focus on doing what you do best! ' />
        <ServicesCard
        image={images.code}
        title='Web Applications'
        desc='Steamline whatever tasks you need.  Using the most popular development frameworks and languages, no idea is too complex to be built. ' />
        </div>
    </div>
  )
}

export default Services