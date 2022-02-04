import React, {useState} from "react";
import { Navigate, Route } from "react-router-dom/index";


const SIGN_IN_ROUTE = '/signin'

function ProtectedRouteElement({ children }) {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    //
    // React.useEffect(() => {
    //     setIsAuthenticated(localStorage.getItem("loggedin") === '1')
    //
    //     console.log('pre')
    //     console.log(localStorage.getItem("loggedin") === '1')
    // });
    //
    // console.log(localStorage.getItem("loggedin") === '1')

    const isAuthenticated = localStorage.getItem("loggedin") === '1'

    return (
      isAuthenticated ? children : <Navigate to={SIGN_IN_ROUTE} replace />
    );
}

export default ProtectedRouteElement;

