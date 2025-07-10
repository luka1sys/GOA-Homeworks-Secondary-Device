import { useContext } from "react"
import ColorContext from "./context/ColorContext"



const HappyColor = () =>{
    const color = useContext(ColorContext)
    return (
        <div style={{backgroundColor:color, width:"400px", height:"400px"}}>
        </div>

    )


}
export default HappyColor