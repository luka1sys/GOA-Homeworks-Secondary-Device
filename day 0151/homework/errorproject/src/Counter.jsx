import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        if (count + 1 === 5) {
            throw new Error("Count reached 5");
        }
        setCount(count + 1);
    };

    return (
        <div>
            <p>count:{count}</p>
            <button onClick={handleClick}>click</button>
        </div>

    )

}
export default Counter