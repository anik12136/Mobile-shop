import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Header/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className=" ">
            <Navbar></Navbar>
            <div className="min-h-screen ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;