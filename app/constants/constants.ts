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
        image: "/assets/todolist.png",
        description:
            "Stay on top of your day with our personalized TodoList app. Effortlessly organize tasks, set deadlines, and collaborate seamlessly for ultimate productivity.",
        tags: ["ReactJs", "Typescript"],
        visit: "https://react-todolist-project.vercel.app/",
        source: "https://github.com/zayinhd/react-todolist-project",
    },
    {
        id: 1,
        title: "Portfolio Website",
        image: "/assets/portfolio-website.png",
        description:
            "Step into my digital world and explore the showcase of my skills through the meticulously crafted portfolio website I developed. From captivating designs to seamless functionality, it's a testament to my expertise and creativity.",
        tags: ["ReactJs", "Typescript"],
        visit: "https://zayinhd.vercel.app/",
        source: "https://github.com/zayinhd/portfolio-website",
    },
];

export default projects;
