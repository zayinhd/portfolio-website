const Contacts = () => {
    return (
        <section className="w-full flex-center flex-col">
            <div className="w-[80%] lg:w-full m-4 text-left ">
                <h1 className="text-3xl font-bold">Let's get to work...</h1>
                <h1 className="text-3xl font-bold text-primary">
                    Status - Available!
                </h1>
                <p>
                    I’m currently working on some
                    <b className="text-xl text-bold text-primary">
                        {" "}
                        Personal Projects{" "}
                    </b>
                    . If you have any projects that you would like to undertake
                    do feel free to reach out. I'm looking for a{" "}
                    <b className="text-xl text-bold text-primary">
                        remote job
                    </b>{" "}
                    or any
                    <b className="text-xl text-bold text-primary">
                        new opportunities.
                    </b>{" "}
                    Just send me a message my inbox is always
                    <b className="text-xl text-bold text-primary"> Open</b>.
                </p>
            </div>
        </section>
    );
};

export default Contacts;
