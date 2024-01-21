interface ProjectsProps {
    id: number;
    title: string;
    image: string;
    description: string;
    tags: string[];
    visit: string;
    source: string;
}

const projects: ProjectsProps[] = [
    {
        id: 0,
        title: "Todo List",
        image: "Mern memories",
        description: "Lorem ipsum  delat tlat fuka kdea .",
        tags: ["ReactJs", "Typescript"],
        visit: "https://react-todolist-project.vercel.app/",
        source: "https://github.com/zayinhd/react-todolist-project",
    },
    {
        id: 1,
        title: "Todo List",
        image: "Mern memories",
        description: "Lorem ipsum  delat tlat fuka kdea .",
        tags: ["ReactJs", "Typescript"],
        visit: "Mern memories",
        source: "Mern memories",
    },
];

export default projects;
