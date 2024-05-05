"use client";

import React from "react";
import {
    FaHtml5,
    FaCss3,
    FaBootstrap,
    FaNodeJs,
    FaReact,
} from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

interface Stack {
    id: number;
    icon: JSX.Element;
}
const stacks: Stack[] = [
    {
        id: 0,
        icon: <FaHtml5 />,
    },
    {
        id: 1,
        icon: <FaCss3 />,
    },
    {
        id: 2,
        icon: <SiJavascript />,
    },

    {
        id: 3,
        icon: <FaBootstrap />,
    },

    {
        id: 4,
        icon: <FaReact />,
    },
    {
        id: 5,
        icon: <SiNextdotjs />,
    },
    {
        id: 6,
        icon: <FaNodeJs />,
    },
    {
        id: 7,
        icon: <SiFramer />,
    },
];

const Stacks = () => {
    return (
        <>
            <ul className="w-full flex flex-row flex-wrap justify-center">
                {stacks.map((stack) => (
                    <motion.button
                        whileHover={{ scale: 1.1 }} // Scale up by 10% on hover
                        whileTap={{ scale: 0.9 }} // Scale down by 10% on tap
                        className="bg-blue-500 text-primary font-bold py-2 px-4 rounded-md dark:text-white"
                        key={stack.id}
                    >
                        <li className="text-3xl">{stack.icon}</li>
                    </motion.button>
                ))}
            </ul>
        </>
    );
};

export default Stacks;
