import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../Context/AuthContext";
export const PrivateRoute=({children,path})=>{
    const {Token}=useContext(AuthContext)
    if(!Token){
        return <Redirect to="/login"/>
    }else{
        return <Route path={path}>{children}</Route>
    }
}