import React from "react";
import { Redirect, Route } from "react-router-dom";

const SIGN_IN_ROUTE = 'signin'

function ProtectedRoute({ children, ...restOfProps }) {
    const isAuthenticated = (localStorage.getItem("loggedin") === "1");

    return (
        <Route
            {...restOfProps}
        >
            {isAuthenticated ? <>{children}</> : <Redirect to={SIGN_IN_ROUTE} />}
        </Route>
    );
}

export default ProtectedRoute;
