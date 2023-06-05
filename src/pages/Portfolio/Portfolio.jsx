import React from 'react';
import PortfolioStyles from  './Portfolio.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import ReverseCard from './ProjectCard/ReverseCard';


const Portfolio = () => {
  return (
    <div className={PortfolioStyles.container}>
        <div className={PortfolioStyles.header}>
            <h1>
              My Projects
            </h1>
            <h3 className={PortfolioStyles.subHeader}>
              Many more in the works!
            </h3>
        </div>
        <div className={PortfolioStyles.card} id='taskr-mobile'>
          <ProjectCard projectIndex={6} />
        </div>
        <div className={PortfolioStyles.card} id='taskr'>
         <ReverseCard projectIndex={5} />
        </div>
        <div className={PortfolioStyles.card} id='watchr'>
          <ProjectCard projectIndex={0} />
        </div>
        <div className={PortfolioStyles.card} id='liz'>
         <ReverseCard projectIndex={1} />
        </div>
        <div className={PortfolioStyles.card} id='gather'>
          <ProjectCard projectIndex={4} />
        </div>
        <div className={PortfolioStyles.card} id='gather-library'>
         <ReverseCard projectIndex={3} />
        </div>
        <div className={PortfolioStyles.card} id='portfolio-site'>
          <ProjectCard projectIndex={2} />
        </div>
    </div>
  )
}

export default Portfolio