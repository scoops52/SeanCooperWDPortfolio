import React from 'react';
import LogoCube from './LogoCube/LogoCube';
import './Skills.scss';
import ListSkills from './ListSkills/ListSkills';


const Skills = () => {
  return (
    <div className='app__skills'>
      <div className='app__skills-text'>
        <div>
        <h1>Skills</h1>
        <p> - more to come!</p>
        </div>
        <p>I specialize in front end languages and frameworks.  I am not officially a designer, but do have a good grasp of design concepts.  I have experience in responsive websites, as well as more complex apps. And of course, I am always looking to not only add to my skillset, but improve on the skills I already have. I am always learning!</p>
        <ListSkills />
      </div>
      <div className="app__skills-cube">
        <LogoCube />
      </div>
    </div>
  )
}

export default Skills