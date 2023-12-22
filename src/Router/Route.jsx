import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashBoard from "../Layout/DashBoard";
import NewTask from "../Pages/Dashboard/NewTask/NewTask";
import PreviousTask from "../Pages/Dashboard/PreviousTask/PreviousTask";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Registration></Registration>
        },
    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path: 'createTask',
        element:<CreateTask></CreateTask>
      },
      {
        path: 'newTask',
        element:<NewTask></NewTask>,
        loader: () => fetch('https://task-managment-server-amber.vercel.app/tasks')
      },
      {
        path: 'previousTask',
        element:<PreviousTask></PreviousTask>
      },
    ]
  }
]);

export default router;
