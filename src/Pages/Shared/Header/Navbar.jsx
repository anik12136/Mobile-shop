

import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

import { Link } from "react-router-dom";
import "./Header.css"

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  return (
    <div className=" rounded-tl-lg rounded-br-lg">
      <div className="navbar bg-slate-200 md:lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {user ? <li><Link to="/dashboard">Dashboard</Link></li>
                : <></>
              }
            </ul>
          </div>

          <img src="https://static.vecteezy.com/system/resources/thumbnails/021/738/168/small_2x/smartphone-mockup-for-applications-ui-presentation-phone-illustration-vector.jpg" alt="" className="rounded-full h-10" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">PhoneVerse</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {user? <li><Link to="/dashboard">Dashboard</Link></li>
              : <></>
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user &&
            <div className="hover-container">
              <img className='rounded-full me-2' src={user.photoURL} alt="Profile" />
              <div className="hover-text">
                <span>{user.displayName}</span>
              </div>
            </div>
          }

          {
            user ? <>
              <button onClick={handleLogOut} className="btn btn-outline btn-default">LogOut</button>
            </> : <>
              <li><Link to="/login" className="btn btn-outline btn-default">Login</Link></li>
            </>
          }
        </div>
      </div>

    </div>
  );
};

export default Navbar;