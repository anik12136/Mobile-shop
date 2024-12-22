import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link to="/"><li><a>Home</a></li></Link>
            <Link to="/products"><li><a>Products</a></li></Link>
            <Link to="/about"><li><a>About</a></li></Link>
            <Link to="/contact"><li><a>Contact</a></li></Link>
          </ul>
        </div>
        <Link to="/"><a className="text-xl">PhoneVerse</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/"><li><a>Home</a></li></Link>
          <Link to="/products"><li><a>Products</a></li></Link>
          <Link to="/about"><li><a>About</a></li></Link>
          <Link to="/contact"><li><a>Contact</a></li></Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login"><a className="btn">Login</a></Link>
      </div>
    </div>
  );
};

export default Navbar;