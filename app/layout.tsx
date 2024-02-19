import "../styles/globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";

import { ThemeProvider } from "./components/themes/theme-provider";

export const metadata = {
    title: "Zayinhd",
    description: "My personal portfolio website",
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

                        <div className="h-[100vh] p-5 flex justify-center ">
                            <main className="w-[100%] sm:w-[75%] m-auto flex flex-row justify-center flex-wrap">
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
