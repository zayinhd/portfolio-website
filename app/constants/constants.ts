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
        id: 1,
        title: "Portfolio Website",
        image: "/assets/portfolio-website.png",
        description:
            "My personal portfolio website developed with NextJs, Framer and TailwindCss.",
        tags: ["NextJs", "TailwindCss", "Framer"],
        visit: "https://zayinhd.vercel.app/",
        source: "https://github.com/zayinhd/portfolio-website",
    },
    {
        id: 0,
        title: "E-Market App",
        image: "/assets/emarket.png",
        description:
            "Stay on top of your day with our personalized TodoList app. Effortlessly organize tasks, set deadlines, and collaborate seamlessly for ultimate productivity.",
        tags: ["ReactJs", "MaterialUI", "CommerceJs"],
        visit: "https://react-todolist-project.vercel.app/",
        source: "https://github.com/zayinhd/react-todolist-project",
    },
];

export default projects;
