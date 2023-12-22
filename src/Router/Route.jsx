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
        loader: () => fetch('http://localhost:5000/tasks')
      },
      {
        path: 'previousTask',
        element:<PreviousTask></PreviousTask>
      },
    ]
  }
]);

export default router;
