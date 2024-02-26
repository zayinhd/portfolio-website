import Link from "next/link";
import Image from "next/image";

const CardItem = ({ projects }) => {
    return (
        <ul className="w-full flex flex-wrap justify-center">
            {projects.map((project) => (
                <li
                    key={project.id}
                    className="text-center lg:w-[30%] m-2 p-2 border-2 border-primary dark:border-white"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={200}
                        height={100}
                        className="m-auto"
                    />
                    <h1 className="my-1 font-bold text-xl text-primary dark:text-white underline underline-offset-8 decoration-primary  dark:decoration-white ">
                        {project.title}
                    </h1>
                    <p className="py-2">{project.description}</p>
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
                            <Link
                                href={project.visit}
                                target="_blank"
                                className="mt-1 p-1 border-2 rounded-lg text-white border-white bg-primary hover:bg-grey"
                            >
                                Visit
                            </Link>
                            <Link
                                href={project.source}
                                target="_blank"
                                className="mt-1 p-1 border-2 rounded-lg text-white border-white bg-primary hover:bg-grey"
                            >
                                Source
                            </Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CardItem;
