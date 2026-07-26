"use client";

import Link from "next/link";
import Stacks from "./components/stacks";
import CardItem from "./components/carditem";
import SocialMediaIcons from "./components/stacks/SocialMediaIcons/SocialMediaIcons";
import projects from "./constants/constants";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className="h-[100%] w-full flex flex-col flex-wrap text-center">
            <div id="home" className="my-6 mx-auto scroll-mt-24">
                <motion.div
                    className="w-[100%] md:w-[50%] lg:w-full m-auto text-center flex items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div className="p-4 text-black  dark:text-white font-bold">
                        <h1 className="text-xl ">
                            Hey there, I'm{" "}
                            <b className="text-bd">Mubarak Mikhail, Zayin.</b>
                        </h1>
                        <p className="pt-3">
                            As an aspiring software engineer, I am constantly
                            exploring new technologies, regaining more knowledge
                            skills. I've created some apps with{" "}
                            <b className="text-bd">JS Frameworks </b>,{" "}
                            <b className="text-bd">Python</b> and{" "}
                            <b className="text-bd">Java.</b>. Currently diving
                            deep into <b className="text-bd">Back-end techs.</b>
                        </p>
                    </div>
                </motion.div>
                <div className="pt-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }} // Scale up by 10% on hover
                        whileTap={{ scale: 0.9 }} // Scale down by 10% on tap
                        className="btn-info"
                    >
                        <Link href="/">Resume</Link>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }} // Scale up by 10% on hover
                        whileTap={{ scale: 0.9 }} // Scale down by 10% on tap
                        className="btn-info"
                    >
                        <Link href="/#projects">Projects</Link>
                    </motion.button>
                </div>
            </div>

            <div id="skills" className="text-center scroll-mt-24">
                <h1 className="text-3xl font-bold text-black underline underline-offset-8 decoration-black dark:decoration-white dark:text-white">
                    Skills
                </h1>
                <div className="mt-3 flex flex-wrap">
                    <Stacks />
                </div>
            </div>

            <section
                id="projects"
                className="w-full flex-center flex-col mt-10 scroll-mt-24"
            >
                <div className="my-4 text-left">
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

            <section
                id="about"
                className="w-full md:w-[60%] flex flex-col justify-center items-center mt-10 scroll-mt-24"
            >
                <div className="m-4 text-left">
                    <h1 className="text-3xl page-topics font-bold">About Me</h1>
                    <div>
                        <h1 className="text-2xl text-center font-bold text-bd">
                            Hey there! I'm Mubarak {"  "}Mikhail, Zayin
                        </h1>

                        <p className="text-sm md:text-lg">
                            Currently pursuing my {"  "}
                            <b className="text-bd">
                                {" "}
                                Bsc. in Computer Science{" "}
                            </b>{" "}
                            at
                            {"  "}
                            <b className="text-bd">
                                Knutsford University College.
                            </b>
                            {"  "}
                            Alongside my studies, I eagerly seek out{" "}
                            <b className="text-bd">internships</b> and side
                            projects to expand my skills and gain real-world
                            experience. With some experience in some programming
                            languages like{" "}
                            <b className="text-bd">JS, Python and Java</b> and
                            frameworks, I've built some interesting projects
                            over the past years with my acquired knowledge not{" "}
                            <b className="text-bd">AI</b>, Lol.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="contacts"
                className="w-full flex-center flex-col text-center mt-10 scroll-mt-24"
            >
                <div>
                    <h1 className="font-bold page-topics">
                        Let's get to work...
                    </h1>
                    <h1 className="text-3xl font-bold text-primary dark:text-white">
                        Status - Available!
                    </h1>
                    <p>
                        I’m currently working on some
                        <b> personal projects </b>. If you have any projects
                        that you would like to undertake do feel free to reach
                        out. I'm looking for a <b>remote job</b> or any{" "}
                        <b>new opportunities.</b> Just send me a message my
                        inbox is always
                        <b> open</b>.
                    </p>
                </div>

                <div className="w-full flex flex-col justify-center nav-bar mt-3">
                    <div className="flex flex-row justify-center">
                        <ul className="text-center">
                            <li>
                                <SocialMediaIcons />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;
