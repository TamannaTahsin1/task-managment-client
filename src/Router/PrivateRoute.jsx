import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>

    }

    if(!user?.email){
       return <Navigate to='/login'></Navigate>

    }
    return children;
};

export default PrivateRoute;