import React from 'react';
import ProjectBox from './ProjectBox';
import { projectData } from '../../Data/ProjectsData';

function ProjectsContent() {
    return (
        <>
            <div className="projects-content">
                <div className="project-list project-list-2">
                    {projectData.map((project, index) => (
                        <ProjectBox
                            key={index}
                            heading={project.heading}
                            description={project.description}
                            name={project.name}
                            namespan={project.namespan}
                            image={project.image}
                            alt={project.alt}
                            type={'2'}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectsContent;
