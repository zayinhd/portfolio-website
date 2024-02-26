/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

interface SocialLinksType {
    [key: string]: string;
}
export const socialLinks: SocialLinksType = {
    instagram: "https://www.instagram.com/vatsalsinghkv",
    github: "https://github.com/vatsalsinghkv",
    twitter: "https://twitter.com/vatsalsinghkv",
    linkedin: "https://www.linkedin.com/in/vatsalsinghkv/",
};

export const author = {
    name: "Mubarak Mikhail",
    email: "zayinm300@gmail.com",
};

export const seoData = {
    title: "Zayin Mikhail | Front-End Developer",
    description:
        "Mikhail is a front-end developer who specializes in building (and occasionally designing) exceptional visual interfaces.",
    author: author.name,
    url: "https://zayinhd.vercel.app/",
    keywords: [
        "Zayin",
        "Mikhail",
        "Zayin Mikhail",
        "@zayinhd",
        "zayinhd",
        "zayinm300@gmail.com",
        "Portfolio",
    ],
    icons: [
        {
            id: 0,
            rel: "favicon",
            type: "image/ico",
            sizes: "any",
            url: "./public/favicon.ico",
        },
        {
            id: 1,
            rel: "favicon",
            type: "image/png",
            sizes: "512x512",
            url: "./public/favicon.png",
        },
        {
            id: 2,
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            url: "./public/android-chrome.png",
        },
        {
            id: 3,
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "./public/apple-icon.png",
        },
    ],
};
