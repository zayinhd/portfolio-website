import React from "react";
import SocialMediaIcons from "../stacks/SocialMediaIcons/SocialMediaIcons";

const Footer: React.FC = () => {
    return (
        <div className=" w-[100vw] flex flex-col justify-center p-4 border-t-2 border-white bg-primary">
            <ul className="w-[80%] m-auto">
                <li>
                    <p>Connect with me</p>
                </li>
                <li>
                    <SocialMediaIcons />
                </li>
            </ul>
            <div className="pt-1 text-center text-xl">
                <p>&copy; Copyright 2023. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
