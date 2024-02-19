import SocialMediaIcons from "../stacks/SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
    return (
        <div className=" w-full flex flex-col justify-center p-4 bg-grey dark:bg-primary">
            <div className="flex flex-row justify-center">
                <ul className="text-center">
                    <li>
                        <p>Connect with me</p>
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
