const AboutSection = () => {
    return (
        <section
            id="about"
            className="w-full md:w-[60%] mx-auto flex flex-col justify-center items-center mt-10 scroll-mt-24"
        >
            <div className="w-full p-4">
                <h1 className="text-3xl page-topics font-bold">About Me</h1>
                <h2 className="text-2xl text-center font-bold text-bd">
                    Hey there! I'm Mubarak Mikhail, also known as Zayin.
                </h2>
                <p className="text-sm md:text-lg">
                    I hold a BSc in Computer Science from Knutsford University
                    and work as a software engineer. I build websites and enjoy
                    collaborating with others to turn ideas into reliable,
                    useful software products. I apply software engineering
                    principles throughout development, from planning and design
                    to implementation and refinement. I also use AI tools to
                    work more efficiently and reach project goals faster. I'm
                    open to collaborating on meaningful projects and new
                    opportunities.
                </p>
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-primary dark:text-white">
                        Relevant coursework
                    </h3>
                    <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base">
                        {[
                            "Data Structures & Algorithms",
                            "Object-Oriented Programming",
                            "Database Systems",
                            "Operating Systems",
                            "Computer Networks",
                            "Software Engineering",
                            "Web Development",
                            "Discrete Mathematics",
                        ].map((course) => (
                            <li className="list-inside list-disc" key={course}>
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;