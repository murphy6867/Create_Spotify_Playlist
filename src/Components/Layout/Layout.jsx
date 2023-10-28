import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div>
        <body  className="flex">
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </body>
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

export default Layout