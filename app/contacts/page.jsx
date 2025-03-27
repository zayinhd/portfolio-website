"use client";

import SocialMediaIcons from "../components/stacks/SocialMediaIcons/SocialMediaIcons";

const Contacts = () => {
    return (
        <section className="w-full flex-center flex-col text-center">
            <div>
                <h1 className="font-bold page-topics">Let's get to work...</h1>
                <h1 className="text-3xl  font-bold text-primary dark:text-white">
                    Status - Available!
                </h1>
                <p>
                    I’m currently working on some
                    <b> personal projects </b>. If you have any projects that
                    you would like to undertake do feel free to reach out. I'm
                    looking for a <b>remote job</b> or any{" "}
                    <b>new opportunities.</b> Just send me a message my inbox is
                    always
                    <b> open</b>.
                </p>
            </div>

            <div className=" w-full flex flex-col justify-center nav-bar">
                <div className="flex flex-row justify-center">
                    <ul className="text-center">
                        <li>
                            <SocialMediaIcons />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
