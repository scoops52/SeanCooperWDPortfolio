import React from 'react';

import './ServicesCard.scss';

const ServicesCard = ({image, title, desc}) => {
  return (
        <div className='app__services-card'>
            <img src={image} alt='service' />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
  )
}

export default ServicesCard