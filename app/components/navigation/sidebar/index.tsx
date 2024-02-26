import Link from "next/link";
import "../../../../styles/globals.css";

import { motion } from "framer-motion";

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
    return (
        <>
            <div
                className="sidebar-container transition  fixed w-full h-full overflow-hidden justify-center bg-grey dark:bg-primary dark:text-white grid pt-[30px] left-0 z-10"
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >
                <button className="absolute right-0 p-5" onClick={toggle}>
                    {/* Close icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="white"
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        />
                    </svg>
                </button>

                <ul className="sidebar-nav  flex flex-col justify-evenly items-start text-center text-primary text-5xl font-bold leading-relaxed">
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="/projects" onClick={toggle}>
                            <p>Projects</p>
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="/about" onClick={toggle}>
                            <p>About</p>
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="/contacts" onClick={toggle}>
                            <p>Contacts</p>
                        </Link>
                    </motion.li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
