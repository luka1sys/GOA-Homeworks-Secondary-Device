import { useState } from 'react'

const useInput = () => {

    const [value, setvalue] = useState({
        email: "",
        pass: ""
    }

    );
    const handleChange = (e) => {
        const {name, value}=e.target
        setvalue(prev =>({
            ...prev,
            [name]:value
        }))


    }

    return [value, handleChange]
}
export default useInput