import React from 'react';
import { useState } from 'react';
import ReverseCardStyles from './ReverseCard.module.scss';
import projects from '../Projects';
import { BsChevronLeft } from 'react-icons/bs';
import ProjectInfo from './ProjectInfo/ProjectInfo';

import { AiOutlineClose } from 'react-icons/ai';

const ReverseCard = ({ projectIndex }) => {
    const [infoShowing, setInfoShowing] = useState(false);

    const toggleInfoCard = () => setInfoShowing(!infoShowing)
    return (
        <div className={ReverseCardStyles.cardTwoContainer}>
            {!infoShowing &&
                <div className={ReverseCardStyles.closedCard}>
                    <BsChevronLeft className={ReverseCardStyles.arrowOpen} onClick={toggleInfoCard} />
                    <div className={ReverseCardStyles.tab}>
                    </div>

                </div>
            }
            {infoShowing &&
                <div className={ReverseCardStyles.infoCard}>
                    <AiOutlineClose className={ReverseCardStyles.closeCard} onClick={toggleInfoCard} />
                    <ProjectInfo project={projects[projectIndex]} />
                </div>
            }
            <div className={ReverseCardStyles.imageCard}>
                <img src={projects[projectIndex].img} alt={projects[projectIndex].name} />
            </div>
            <div className={ReverseCardStyles.mobileLinks}>
                    <a href={projects[projectIndex].link} target='_blank' rel="noreferrer">Link</a>
                    <span className={ReverseCardStyles.linksSeperator}>|</span>
                    <a href={projects[projectIndex].gitHub} target='_blank' rel="noreferrer">GitHub</a>
                </div>
        </div>
    )
}

export default ReverseCard