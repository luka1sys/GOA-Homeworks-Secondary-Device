import { useState } from "react";
const useCounter = () => {
    const [count, setcount] = useState(0);

    const handleclick = () => {
        setcount(count+1)
    }
    const handleDissolution = () =>{
        setcount(0)
    }
    return [count, handleclick,handleDissolution]

}
export default useCounter