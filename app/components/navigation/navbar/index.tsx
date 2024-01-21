import React from "react";
import Link from "next/link";
import Logo from "./Logo";

interface NavbarProps {
    toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
    return (
        <>
            <div className="w-full h-20 bg-primary sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-around items-center h-full">
                        <Logo />
                        <ul className="hidden md:flex gap-x-6 text-white text-xl">
                            <li>
                                <Link href="/projects">
                                    <p>Projects</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>About</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts">
                                    <p>Contacts</p>
                                </Link>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="inline-flex items-center md:hidden"
                            onClick={toggle}
                        >
                            {/* Menu icon */}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#fff"
                                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
