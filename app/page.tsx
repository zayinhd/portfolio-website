"use client";

import Link from "next/link";
import Stacks from "./components/stacks";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className="h-screen pt-2pl-5 flex flex-col text-center">
            <div className="my-6">
                <div>
                    <p>
                        Hi, I'm a front-end developer with some experience in
                        some backend tools.
                    </p>
                </div>
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
                <h1 className="font-bold">Skills</h1>
                <div className="flex flex-wrap bg-black">
                    <Stacks />
                </div>
            </div>
        </section>
    );
};

export default Home;
