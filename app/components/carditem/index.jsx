import Link from "next/link";
import Image from "next/image";

const CardItem = ({ projects }) => {
    return (
        <ul className="flex flex-wrap justify-center">
            { projects.map((project) => (
                <li
                    key={ project.id }
                    className="text-center xm:w-[30%] m-2 p-1 border-2 border-primary dark:border-white"
                >
                    <Image
                        src={ project.image }
                        alt={ project.title }
                        width={ 200 }
                        height={ 100 }
                        className="m-auto w-auto"
                        style={ { width: "100%", height: "auto" } }
                    />
                    <h1 className="my-1 font-bold text-xl text-primary dark:text-white underline underline-offset-8 decoration-primary  dark:decoration-white ">
                        { project.title }
                    </h1>
                    <p className="py-2">{ project.description }</p>
                    <div>
                        <ul className="flex justify-between">
                            { project.tags.map((tag) => (
                                <li
                                    key={ tag }
                                    className="mt-1 p-1 border-2 rounded-lg text-primary border-primary dark:border-white dark:text-white"
                                >
                                    { tag }
                                </li>
                            )) }
                        </ul>
                        <div className="flex justify-between">
                            <Link
                                href={ project.visit }
                                target="_blank"
                                className="mt-1 p-1 border-2 rounded-lg text-white border-white bg-secondary hover:bg-secondary"
                            >
                                Visit
                            </Link>
                            <Link
                                href={ project.source }
                                target="_blank"
                                className="mt-1 p-1 border-2 rounded-lg text-white border-white bg-secondary hover:bg-secondary"
                            >
                                Source
                            </Link>
                        </div>
                    </div>
                </li>
            )) }
        </ul>
    );
};

export default CardItem;
