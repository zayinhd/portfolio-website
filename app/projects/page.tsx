import projects from "../constants/constants";
import CardItem from "../components/carditem";

const Projects = () => {
    return (
        <section className="w-full flex-center flex-col">
            <div className="w-[80%] lg:w-full m-4 text-left ">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="mt-3">
                    Here are some of the projects I've worked on. Do{" "}
                    <b className="text-bd">check them out.</b>
                </p>
                <div className="mt-5">
                    <CardItem projects={projects} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
