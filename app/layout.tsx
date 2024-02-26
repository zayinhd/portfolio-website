import "../styles/globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";
import { seoData } from "./lib/content/portfolio";

import { ThemeProvider } from "./components/themes/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: seoData.title,
    authors: [
        {
            name: seoData.author,
        },
    ],
    description: seoData.description,
    keywords: seoData.keywords.join(","),
    metadataBase: new URL(seoData.url),
    alternates: {
        canonical: seoData.url,
    },
    icons: seoData.icons,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="box-border bg-white dark:bg-secondary">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="flex flex-col flex-wrap ">
                        <Navigation />

                        <div className=" p-5 flex justify-center ">
                            <main className="h-[100%] w-[100%] sm:w-[75%] m-auto flex flex-row justify-center flex-wrap">
                                {children}
                            </main>
                        </div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
