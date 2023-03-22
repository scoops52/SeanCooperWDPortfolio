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
        <div className={PortfolioStyles.card}>
          <ProjectCard projectIndex={0} />
        </div>
        <div className={PortfolioStyles.card}>
         <ReverseCard projectIndex={1} />
        </div>
        <div className={PortfolioStyles.card}>
          <ProjectCard projectIndex={2} />
        </div>
    </div>
  )
}

export default Portfolio