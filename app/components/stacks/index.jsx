"use client";

import React from "react";
import { FaDocker, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiJavascript, SiKubernetes, SiNextdotjs } from "react-icons/si";

const stacks = [
    {
        id: 0,
        name: "JavaScript",
        icon: <SiJavascript />,
    },
    {
        id: 1,
        name: "Python",
        icon: <FaPython />,
    },
    {
        id: 2,
        name: "Java",
        icon: <FaJava />,
    },
    {
        id: 3,
        name: "React.js",
        icon: <FaReact />,
    },
    {
        id: 4,
        name: "Next.js",
        icon: <SiNextdotjs />,
    },
    {
        id: 5,
        name: "Node.js",
        icon: <FaNodeJs />,
    },
    {
        id: 6,
        name: "Docker",
        icon: <FaDocker />,
    },
    {
        id: 7,
        name: "Kubernetes",
        icon: <SiKubernetes />,
    },
];

const Stacks = () => {
    return (
        <>
            <ul className="w-full flex flex-row flex-wrap justify-center">
                {stacks.map((stack) => (
                    <li
                        className="mx-2 py-2 px-4 text-3xl text-black hover:text-primary dark:text-white dark:hover:text-primary"
                        key={stack.id}
                        title={stack.name}
                    >
                        <span aria-hidden="true">{stack.icon}</span>
                        <span className="sr-only">{stack.name}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Stacks;
