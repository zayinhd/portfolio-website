/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        borderRadius: {
            none: "0",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            DEFAULT: "4px",
            md: "0.375rem",
            lg: "0.5rem",
            full: "9999px",
            large: "12px",
        },
        colors: {
            transparent: "transparent",
            primary: "#1e1b4b",
            secondary: "#111827",
            white: "#ffffff",
            danger: "#dc2626",
            black: "#030712",
            grey: "#9ca3af",
        },
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            md: "1.1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
        extend: {
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
        },
    },
    plugins: [],
};
