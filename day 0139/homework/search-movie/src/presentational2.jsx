import { useState } from "react";
export const MovieForm = ({ search }) => {
    const [title,setTitle] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        search(title);

    }
    return (
        <form onSubmit={handleSubmit} >
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" />
            <button type="submit">search</button>
        </form>
    )

}