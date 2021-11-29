import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
export const PrivateRoute = ({ children, path }) => {
    const { Token } = useSelector(store => store.Auth)
    if (!Token) {
        return <Redirect to="/login" />
    } else {
        return <Route path={path}>{children}</Route>
    }
}