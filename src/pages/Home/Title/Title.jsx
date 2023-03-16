import React from 'react';

import './Title.scss';

const Title = ({ text }) => {
  return (
    <h1 className='title'>
        {text.split(' ').map((letter,index) => (
            <span className='title-letter' key={index}>
                {letter}
            </span>
        ))}
    </h1>
  )
}

export default Title