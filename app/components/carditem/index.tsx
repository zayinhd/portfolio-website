const CardItem = ({ projects }) => {
    return (
        <ul>
            {projects.map((project) => (
                <li key={project.id} className="mt-2 p-2 border-2 border-white">
                    <img src="" alt="" />
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div>
                        <ul className="flex justify-between">
                            {project.tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="mt-1 p-1 border-2 rounded-lg border-white"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CardItem;
