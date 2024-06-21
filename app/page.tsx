"use client";

import Link from "next/link";
import Image from "next/image";
import Stacks from "./components/stacks";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className="h-[100%] flex flex-col flex-wrap text-center ">
            <div className="my-6 mx-auto">
                <motion.div
                    className="w-[80%] lg:w-full m-auto text-left flex items-center"
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
                            A{" "}
                            <b className="text-bd">Computer Science Student.</b>{" "}
                            <br />
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
                        <Link href="/projects">Projects</Link>
                    </motion.button>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-secondary underline underline-offset-8 decoration-secondary dark:decoration-secondary dark:text-secondary">
                    Skills
                </h1>
                <div className="mt-3 flex flex-wrap">
                    <Stacks />
                </div>
            </div>
        </section>
    );
};

export default Home;
