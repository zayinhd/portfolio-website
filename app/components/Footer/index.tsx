import SocialMediaIcons from "../stacks/SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
    return (
        <div className=" w-full flex flex-col justify-center p-4 nav-bar">
            <hr className="mb-2 text-primary dark:text-white" />
            <div className="flex flex-row justify-center">
                <ul className="text-center">
                    <li>
                        <p className="xm:ml-5">Connect with me</p>
                    </li>
                    <li>
                        <SocialMediaIcons />
                    </li>
                </ul>
            </div>
            <div className="pt-1 text-center text-xl">
                <p>&copy; Copyright 2023. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
