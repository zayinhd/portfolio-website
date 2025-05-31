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

const stacks = [
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
                    <button
                        className=" mx-2 text-3xl text-black py-2 px-4 hover:text-primary dark:hover:text-primary dark:text-white"
                        key={stack.id}
                    >
                        <li>{stack.icon}</li>
                    </button>
                ))}
            </ul>
        </>
    );
};

export default Stacks;
