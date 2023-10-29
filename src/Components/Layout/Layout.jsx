import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Library from '../Library';

const Layout = () => {
    const [libraryToggle, setLibraryToggle] = useState(false);


  return (
    <div className="w-screen h-screen p-2 bg-black">
        <div className="flex w-full h-[91%] gap-2">
            <header className="w-[34vw] h-full">
                <nav className="w-full h-full flex flex-col gap-2">
                    <Navbar />
                    <Library libTaggle={setLibraryToggle} />
                </nav>
            </header>
            <main className="w-full h-full">
                <Outlet />
            </main>
        </div>
        <footer className="w-full h-[9%] bg-transparent">
            <Footer />
        </footer>
    </div>
    )
}

export default Layout