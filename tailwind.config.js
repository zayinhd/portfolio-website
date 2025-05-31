/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                primary: "#1e1b4b",
                secondary: "#111827",
                white: "#ffffff",
                danger: "#dc2626",
                black: "#030712",
                grey: "#9ca3af",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            spacing: {
                1: "8px",
                2: "12px",
                3: "16px",
                4: "20px",
                5: "26px",
                6: "32px",
                7: "36px",
                8: "42px",
            },
            screens: {
                xm: "300px",
                sm: "576px",
                md: "960px",
                lg: "1440px",
            },
        },
    },
    plugins: [],
};
