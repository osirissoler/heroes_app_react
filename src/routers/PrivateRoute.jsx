import {  useContext } from "react"
import { Navigate, useLocation } from "react-router"
import { AuthCotext } from "../auth/AuthContext"


export const PrivateRoute = ({children}) => {

    const  {pathname, search} = useLocation()
    console.log("private route",pathname , search)

    localStorage.setItem('lastPath',pathname + search )

    const {user} = useContext(AuthCotext)
    return  user.logged
    ? children
    :<Navigate  to="/login"/>
}
