import React from "react";

const About = () => {
    return (
        <section className=" w-[100%] md:w-[60%] flex flex-col justify-center items-center">
            <div className=" m-4">
                <h1 className="text-3xl page-topics font-bold">About Me</h1>
                <div className=" ">
                    <h1 className="text-2xl text-center font-bold text-bd">
                        Hey there! I'm Mubarak {"  "}Mikhail, Zayin
                    </h1>

                    <p className="text-sm md:text-lg">
                        Currently pursuing my {"  "}
                        <b className="text-bd"> Bsc. in Computer Science </b> at
                        {"  "}
                        <b className="text-bd">Knutsford University College.</b>
                        {"  "}
                        Alongside my studies, I eagerly seek out{" "}
                        <b className="text-bd">internships</b> and side projects
                        to expand my skills and gain real-world experience. With
                        some experience in some programming languages like{" "}
                        <b className="text-bd">JS, Python and Java</b> and
                        frameworks, I've built some interesting projects over
                        the past years with my acquired knowledge not{" "}
                        <b className="text-bd">AI</b>, Lol.
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
