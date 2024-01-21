import React from "react";

const About = () => {
    return (
        <section className="w-full flex-center flex-col">
            <div className="w-[80%] lg:w-full m-4 text-left ">
                <h1 className="text-3xl font-bold">About Me</h1>
                <h1 className="text-2xl font-bold text-primary">
                    Cough, Cough!!!
                </h1>
                <p>
                    Here comes the boring, Hi. You can just call me Zayin. I'm a
                    self-taught{" "}
                    <b className="text-xl text-bold text-primary">
                        Front-End Developer{" "}
                    </b>{" "}
                    with some experience in some backend tools. I've built some
                    interesting projects over the past year with my unmatchable
                    skill, Lol.
                    <br />
                    <br />
                    My next big goal is to break and dive deep into the
                    <b className="text-bold text-xl text-primary">
                        {" "}
                        Back-End Field
                    </b>{" "}
                    and extrapolate the knowledge I extract into my{" "}
                    <b className="text-bold text-xl text-primary">
                        Upcoming projects.
                    </b>
                </p>
            </div>
        </section>
    );
};

export default About;
