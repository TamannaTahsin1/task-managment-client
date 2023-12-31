import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png'
import MenuDropDown from "./MenuDropDown";
const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-red-700"
              : ""
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/dashboard/createTask"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-red-700"
              : ""
          }
        >
        Dashboard
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-red-700"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-red-700"
              : ""
          }
        >
         Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>
              <img src={logo} alt='' className='w-20 h-16' />
            </div>
            <a className='btn btn-ghost normal-case text-2xl font-extrabold bg-gradient-to-r  from-red-600 via-orange-400  to-red-600 text-transparent bg-clip-text'>
              Taskify
            </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <MenuDropDown></MenuDropDown>
        {/* <Link to={'/login'}>
        <button className="bg-red-700 btn text-white">Login</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
