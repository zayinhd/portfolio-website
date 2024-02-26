import React from "react";
import Link from "next/link";
import Logo from "./Logo";

import { motion } from "framer-motion";
import { ThemeSwitcher } from "../../theme-toggle/ThemeSwitcher";

interface NavbarProps {
    toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
    return (
        <>
            <div className="w-full h-20 sticky top-0 nav-bar">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-around items-center h-full">
                        <Logo />
                        <div>
                            <ul className="hidden md:flex gap-x-6 text-primary text-xl font-bold dark:text-white">
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href="/projects">
                                        <p>Projects</p>
                                    </Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href="/about">
                                        <p>About</p>
                                    </Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href="/contacts">
                                        <p>Contacts</p>
                                    </Link>
                                </motion.li>
                            </ul>
                            <div className="w-25">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    type="button"
                                    className="inline-flex items-center md:hidden"
                                    onClick={toggle}
                                >
                                    {/* Menu icon */}

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="40"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                                        />
                                    </svg>
                                </motion.button>
                                <ThemeSwitcher />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
