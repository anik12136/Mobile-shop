import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" h-10 mx-10 text-center ">
            <div className="flex justify-between mx-5">
                <Link to="/"><h2>Home</h2></Link>
                
            </div>
        </div>
    );
};

export default Navbar;