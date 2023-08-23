import React from 'react';
import { projectData } from '../../Data/ProjectsData';
import LoadButton from '../Misc/LoadButton';
import ProjectBox from './ProjectBox';

function ProjectsSection(props) {
    return (
        <div className="project-list project-list-1">
            {projectData.map((project, index) => (
                <ProjectBox
                    key={index}
                    heading={project.heading}
                    description={project.description}
                    name={project.name}
                    namespan={project.namespan}
                    image={project.image}
                    alt={project.alt}
                />
            ))}
            {props.load ? <LoadButton /> : null}
        </div>
    );
}

export default ProjectsSection;
