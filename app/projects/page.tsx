import React from "react";
import projects from "../constants/constants";

interface ProjectsProps {
    id: number;
    title: string;
    image: string;
    description: string;
    tags: string;
    visit: string;
    source: string;
}

const Projects: React.FC<ProjectsProps> = ({}) => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 key={projects[0].id}>{projects[0].title}</h1>
        </section>
    );
};

export default Projects;
