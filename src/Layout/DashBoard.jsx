import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import { MdOutlineAddTask } from "react-icons/md";

const DashBoard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-full">
            <ul className="menu p-5">
          {/* *************USER*************** */}

          <li className="font-semibold text-lg">
            <NavLink
              to="/dashboard/createTask"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white  text-base bg-red-700"
                  : ""
              }
            >
             <MdOutlineAddTask />

              Create Task
            </NavLink>
          </li>

          <li className="font-semibold text-lg">
            <NavLink
              to="/dashboard/newTask"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white  text-base bg-red-700"
                  : ""
              }
            >
             <BsListTask />

              New Task
            </NavLink>
          </li>
          <li className="font-semibold text-lg">
            <NavLink
              to="/dashboard/previousTask"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white text-base bg-red-700"
                  : ""
              }
            >
              <GrTask />
              Previous Task
            </NavLink>
          </li>

          {/* shared nav links */}
          <div className="divider text-black"></div>
          <li className="font-semibold text-lg">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white text-base bg-red-700"
                  : ""
              }
            >
             <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;