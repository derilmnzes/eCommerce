import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to="/admin/signin" />;
}
