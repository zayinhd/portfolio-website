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
            "Built with NextJs, Framer and TailwindCss. Showcases a brief information of who I am.",
        tags: ["NextJs", "TailwindCss", "Framer"],
        visit: "https://zayinhd.vercel.app/",
        source: "https://github.com/zayinhd/portfolio-website",
    },
    {
        id: 0,
        title: "E-Market App",
        image: "/assets/emarket.png",
        description:
            "Developed with ReactJS, MUI, Commercejs and Stripe api. Stripe api integrated with app to provide a gateway for receiving payments.",
        tags: ["ReactJs", "MaterialUI", "CommerceJs"],
        visit: "https://react-todolist-project.vercel.app/",
        source: "https://github.com/zayinhd/react-todolist-project",
    },
];

export default projects;
