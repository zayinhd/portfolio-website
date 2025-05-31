"use client";

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const stacks = [
    {
        id: 0,
        icon: <FaGithub />,
        href: "https://github.com/zayinhd",
    },
    {
        id: 1,
        icon: <FaXTwitter />,
        href: "https://x.com/zayinhd",
    },

    {
        id: 2,
        icon: <FaInstagram />,
        href: "https://instagram.com/zayinhd",
    },
    {
        id: 3,
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/zayin-mikhail-229400269/",
    },
    {
        id: 4,
        icon: <SiGmail />,
        href: "https://zayinm300@gmail.com",
    },
];

const SocialMediaIcons = () => {
    return (
        <div>
            <ul className="h-full flex justify-evenly">
                { stacks.map((stack) => (
                    <motion.button
                        whileHover={ { scale: 1.1 } }
                        whileTap={ { scale: 0.9 } }
                        className=" font-bold py-2 px-4 rounded-md sm-icons"
                        key={ stack.id }
                    >
                        <li>
                            <a
                                href={ stack.href }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl"
                            >
                                { stack.icon }
                            </a>
                        </li>
                    </motion.button>
                )) }
            </ul>
        </div>
    );
};

export default SocialMediaIcons;
