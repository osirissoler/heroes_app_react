import {  useContext } from "react"
import { Navigate } from "react-router"
import { AuthCotext } from "../auth/AuthContext"


export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthCotext)
    return  user.logged
    ? <Navigate  to="/"/>
    :children
}
