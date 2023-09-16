// ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, imageSrc, projectUrl }) => {
    return ( <
        div className = "project-card" >
        <
        img src = { imageSrc }
        alt = { title }
        /> <
        h3 > { title } < /h3> <
        p > { description } < /p> <
        a href = { projectUrl }
        target = "_blank"
        rel = "noopener noreferrer" >
        View on GitHub <
        /a> <
        /div>
    );
};

export default ProjectCard;