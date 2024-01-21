"use client";

import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialMediaIcons: React.FC = () => {
    return (
        <div className="w-[20vw] h-full">
            <ul className="h-full flex justify-evenly items-center">
                <li>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                    >
                        <a
                            href="https://github.com/zayinhd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl"
                        >
                            <FaGithub />
                        </a>
                    </motion.button>
                </li>
                <li>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                    >
                        <a
                            href="https://twitter.com/zayinhd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl"
                        >
                            <FaTwitter />
                        </a>
                    </motion.button>
                </li>
                <li>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                    >
                        <a
                            href="https://www.instagram.com/zayinhd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl"
                        >
                            <FaInstagram />
                        </a>
                    </motion.button>
                </li>
            </ul>
        </div>
    );
};

export default SocialMediaIcons;
