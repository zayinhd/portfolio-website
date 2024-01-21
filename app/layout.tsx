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
                    <main className="flex flex-col flex-wrap bg-secondary">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
