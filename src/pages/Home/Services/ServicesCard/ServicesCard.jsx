import React from 'react';
import { images } from '../../../../constants';
import './ServicesCard.scss';

const ServicesCard = ({image, title, desc}) => {
  return (
        <div className='app__services-card'>
            <img src={image} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
  )
}

export default ServicesCard