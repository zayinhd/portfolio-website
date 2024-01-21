import "../styles/globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";

export const metadata = {
    title: "Zayinhd",
    description: "My personal portfolio website",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="box-border">
                <div className="flex flex-col flex-wrap main">
                    <Navigation />
                    <div className="h-[100vh] p-5 flex justify-center bg-secondary">
                        <main className="w-[100%] sm:w-[75%] m-auto flex flex-row justify-center flex-wrap">
                            {children}
                        </main>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
