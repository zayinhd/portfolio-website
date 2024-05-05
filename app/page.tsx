"use client";

import Link from "next/link";
import Image from "next/image";
import Stacks from "./components/stacks";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className="h-[100%] flex flex-col flex-wrap text-center ">
            <div className="my-6">
                <motion.div
                    className="w-[80%] lg:w-full ml-6 text-left flex items-center xm:bg-none  md:bg-[url('/images/my-image.jpg')] bg-cover bg-center rounded-lg dark:mix-blend-screen"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div className="p-4 text-black dark:text-white font-bold">
                        <h1 className="text-xl ">
                            Hey there, I'm{" "}
                            <b className="text-bd">Mubarak Mikhail, Zayin.</b>
                        </h1>
                        <p className="pt-3">
                            a passionate and driven{" "}
                            <b className="text-bd">Computer Science Student</b>{" "}
                            on a mission to craft innovative solutions and make
                            a positive impact through technology. <br />
                            With a blend of creativity and technical prowess, I
                            thrive on transforming ideas into tangible digital
                            experiences. As an aspiring software engineer, I am
                            constantly exploring new technologies, honing my
                            skills, and pushing the boundaries of what's
                            possible. I've created some apps with{" "}
                            <b className="text-bd">ReactJS, NextJs </b> and{" "}
                            <b className="text-bd"> JS</b>. Currently diving
                            deep into <b className="text-bd">Back-end.</b>
                        </p>
                    </div>
                    <div className="flex-shrink-0 xm:hidden md:block">
                        <div className="h-full">
                            <Image
                                src="/images/my-image.jpg"
                                width={300}
                                height={500}
                                alt="my-image"
                                className="rounded-lg"
                            />
                        </div>
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
                <h1 className="text-3xl font-bold text-primary underline underline-offset-8 decoration-primary dark:decoration-white dark:text-white">
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
