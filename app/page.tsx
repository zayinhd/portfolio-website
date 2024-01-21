"use client";

import Link from "next/link";
import Stacks from "./components/stacks";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className="h-screen flex flex-col flex-wrap text-center">
            <div className="my-6">
                <div className="w-[80%] lg:w-full m-4 text-left ">
                    <h1 className="text-3xl font-bold">Cough, Cough!!!</h1>
                    <p className="pt-3">
                        Here comes the boring, Hi. You can just call me Zayin.
                        I'm a self-taught{" "}
                        <b className="text-bold text-white">
                            Front-End Developer{" "}
                        </b>{" "}
                        with some experience in some backend tools. I've built
                        some interesting projects over the past year with my
                        unmatchable skill, Lol.
                        <br />
                        <br />
                        My next big goal is to break and dive deep into the
                        <b className="text-bold text-white">
                            Back-End Field
                        </b>{" "}
                        and extrapolate the knowledge I extract into my{" "}
                        <b className="text-bold text-white">
                            Upcoming projects.
                        </b>
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
                <h1 className="text-3xl font-bold">Skills</h1>
                <div className="mt-3 flex flex-wrap">
                    <Stacks />
                </div>
            </div>
        </section>
    );
};

export default Home;
