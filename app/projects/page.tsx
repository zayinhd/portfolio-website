import projects from "../constants/constants";

const Projects = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 key={projects[0].id}>{projects[0].title}</h1>
        </section>
    );
};

export default Projects;
