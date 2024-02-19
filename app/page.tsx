"use client";

import Link from "next/link";
import Stacks from "./components/stacks";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className="h-screen flex flex-col flex-wrap text-center">
            <div className="my-6">
                <motion.div
                    className="w-[80%] lg:w-full m-4 text-left "
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <h1 className="text-3xl font-bold">Cough, Cough!!!</h1>
                    <p className="pt-3">
                        Here comes the boring, Hi. You can just call me{" "}
                        <b className="text-bd">Zayin</b>. I'm a self-taught{" "}
                        <b>Front-End Developer </b> with some experience in some
                        backend tools.
                        <br />
                        <br />
                        I've created some apps with{" "}
                        <b className="text-bd">ReactJS, NextJs </b> and{" "}
                        <b className="text-bd"> JS</b>. Currently diving deep
                        into <b className="text-bd">Back-end.</b>
                    </p>
                </motion.div>
                <div className="pt-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }} // Scale up by 10% on hover
                        whileTap={{ scale: 0.9 }} // Scale down by 10% on tap
                        className="mr-5 border-2 border-white rounded-full text-white py-1 px-4 bg-transparent hover:bg-primary"
                    >
                        <Link href="/">Resume</Link>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }} // Scale up by 10% on hover
                        whileTap={{ scale: 0.9 }} // Scale down by 10% on tap
                        className="mr-5 border-2 border-white rounded-full text-white py-1 px-4 bg-transparent hover:bg-primary"
                    >
                        <Link href="/projects">Projects</Link>
                    </motion.button>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold">Skills</h1>
                <div className="mt-3 flex flex-wrap">
                    <Stacks />
                </div>
            </div>
        </section>
    );
};

export default Home;
