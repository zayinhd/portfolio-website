import projects from "../constants/constants";
import CardItem from "../components/carditem";

const Projects = () => {
    return (
        <section className="w-full  flex-center flex-col">
            <div className="my-4 text-left ">
                <h1 className="text-3xl page-topics font-bold">Projects</h1>
                <p className="mt-3 text-center">
                    Here are some of the projects I've worked on. Do{" "}
                    <b>check them out.</b>
                </p>
                <div className="mt-5">
                    <CardItem projects={projects} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
