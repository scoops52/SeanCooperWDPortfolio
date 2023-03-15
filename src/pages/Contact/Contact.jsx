import React from 'react';
import Form from './Form/Form';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='app__contact'>
      <div className="app__contact-text">
        <h1>Contact Me</h1>
        <p>I am always looking for help with any project, short-term or long term. I am also open to full time positions working with a team.</p>
      </div>
      <div className="app__contact-form">
        <Form />
      </div>
    </div>
  )
}

export default Contact