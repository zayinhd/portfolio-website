"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
    const [showButton, setShowButton] = useState<boolean>(false);
    const changeNavButton = () => {
        if (window.scrollY >= 400 && window.innerWidth < 768) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNavButton);
    }, []);

    const [width, setWidth] = useState<number>(0);
    const updateWidth = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        updateWidth();
    }, []);

    return (
        <>
            <div style={{ display: showButton ? "none" : "block" }}>
                <Image
                    src={"/images/logo.png"}
                    alt="Logo"
                    width={width < 1024 ? "50" : "60"}
                    height={width < 1024 ? "50" : "60"}
                    className="relative"
                />
            </div>
        </>
    );
};

export default Logo;
