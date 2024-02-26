import Link from "next/link";

const CardItem = ({ projects }) => {
    return (
        <ul className="flex flex-wrap justify-center">
            {projects.map((project) => (
                <li
                    key={project.id}
                    className="lg:w-[40%] m-2 p-2 border-2 border-primary dark:border-white"
                >
                    <img src="" alt="" />
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div>
                        <ul className="flex justify-between">
                            {project.tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="mt-1 p-1 border-2 rounded-lg text-primary border-primary dark:border-white dark:text-white"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between">
                            <a
                                href={project.visit}
                                target="_blank"
                                className="mt-1 p-1 border-2 rounded-lg text-white border-white bg-primary"
                            >
                                Visit
                            </a>
                            <a
                                href={project.source}
                                target="_blank"
                                className="mt-1 p-1 border-2 rounded-lg text-white border-white bg-primary"
                            >
                                Source
                            </a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CardItem;
