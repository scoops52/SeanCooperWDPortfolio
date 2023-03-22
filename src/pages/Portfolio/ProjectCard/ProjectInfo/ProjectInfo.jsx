import React from 'react';
import ProjectInfoStyles from './ProjectInfo.module.scss';

const ProjectInfo = ({ project }) => {
    return (
        <div className={ProjectInfoStyles.info}>
            <h1 className={ProjectInfoStyles.header}>{project.name}</h1>
            <div className={ProjectInfoStyles.description}>
                <p>{project.description}</p>
            </div>
            <div className={ProjectInfoStyles.madeUsing}>
                <h3>Made Using</h3>
                <ul className={ProjectInfoStyles.icons}>
                    {project.icons.map((iconObject, index) => (
                        <li key={index}>
                           <span className={ProjectInfoStyles.singleIcon}>{iconObject.icon}</span>
                            <span key={index} className={ProjectInfoStyles.iconLabel}>{iconObject.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={ProjectInfoStyles.links}>
                <a href={project.link} target='_blank' rel="noreferrer">Link</a>
                |
                <a href={project.gitHub} className={ProjectInfoStyles.gitHub} target='_blank' rel="noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default ProjectInfo