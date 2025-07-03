import { useContext } from "react"
import { RoleContext } from "./context"


export const ShowRole = () =>{
    const showRole = useContext(RoleContext)

    return(
        <h1>Role: {showRole}</h1>


    )
}