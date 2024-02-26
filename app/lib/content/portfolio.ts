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
            rel: "apple-touch-icon",
            sizes: "120x120",
            url: "/favicons/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "512x512",
            url: "/favicons/android-chrome-512x512.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            url: "/favicons/android-chrome-192x192.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicons/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicons/favicon-16x16.png",
        },
    ],
};
