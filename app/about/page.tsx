import React from "react";

const About = () => {
    return (
        <section className="w-full flex-center flex-col">
            <div className="w-[80%] lg:w-full m-4 text-left ">
                <h1 className="text-3xl page-topics font-bold">About Me</h1>
                <h1 className="text-2xl font-bold text-primary">
                    Hey there! I'm Mubarak Mikhail,
                </h1>
                <p>
                    Currently pursuing my{" "}
                    <b className="text-primary">Bsc. in Computer Science</b> at{" "}
                    <b className="text-primary">Knutsford University College</b>
                    , I'm fueled by a passion for learning and a drive to push
                    the boundaries of what's possible in the digital realm.
                    Alongside my studies, I eagerly seek out internships and
                    side projects to expand my skills and gain real-world
                    experience. with some experience in some backend tools. I've
                    built some interesting projects over the past year with my
                    unmatchable skill, Lol.
                    <br />
                    <br />
                    My next big goal is to break and dive deep into the
                    <b className="text-primary"> Back-end field</b> and
                    extrapolate the knowledge I extract from my learning process
                    into my <b className="text-primary">upcoming projects.</b>
                    <br />
                    <p>
                        Beyond coding, you'll often find me exploring the{" "}
                        <b className="text-primary">
                            latest tech trends, playing football, or
                            volunteering my time to mentor aspiring developers.
                        </b>{" "}
                        I believe in giving back to the community that has
                        nurtured my growth and in paying it forward to the next
                        generation of tech enthusiasts.
                        <br />
                        So, whether you're here to explore my projects, chat
                        about the latest tech breakthroughs, or just geek out
                        over lines of code, I'm thrilled to have you along for
                        the ride.{" "}
                        <b className="text-primary">
                            Let's embark on this exciting journey together
                        </b>{" "}
                        and make some magic happen in the world of software
                        engineering!
                    </p>
                </p>
            </div>
        </section>
    );
};

export default About;
