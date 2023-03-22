import React, { useState } from 'react';
import ProjectCardStyles from './ProjectCard.module.scss';
import projects from '../Projects';
import { BsChevronRight } from 'react-icons/bs';

import { AiOutlineClose } from 'react-icons/ai';
import ProjectInfo from './ProjectInfo/ProjectInfo';


const ProjectCard = ({ projectIndex }) => {
    const [infoShowing, setInfoShowing] = useState(false);

    const toggleInfoCard = () => setInfoShowing(!infoShowing)

    return (
            <div className={ProjectCardStyles.cardOneContainer}>
                <div className={ProjectCardStyles.imageCard}>
                    <img src={projects[projectIndex].img} alt={projects[projectIndex].name} />
                </div>
                <div className={ProjectCardStyles.mobileLinks}>
                    <a href={projects[projectIndex].link} target='_blank' rel="noreferrer">Link</a>
                    <span className={ProjectCardStyles.linksSeperator}>|</span>
                    <a href={projects[projectIndex].gitHub} target='_blank' rel="noreferrer">GitHub</a>
                </div>
                {!infoShowing &&
                    <div className={ProjectCardStyles.closedCard}>
                        <div className={ProjectCardStyles.tab}>
                        </div>
                            <BsChevronRight className={ProjectCardStyles.arrowOpen} onClick={toggleInfoCard}/>
                    </div>
                }
                {infoShowing &&
                    <div className={ProjectCardStyles.infoCard}>
                        <AiOutlineClose className={ProjectCardStyles.closeCard} onClick={toggleInfoCard}/>
                        <ProjectInfo project={projects[projectIndex]}/>
                    </div>
                }
                
            </div>
  
    )
}

export default ProjectCard