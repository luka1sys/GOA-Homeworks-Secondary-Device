

const Counter = ({increment,count}) =>{
    return(
        <div>
            <button onClick={increment}>click</button>
            <p>{count}</p>
        </div>
    )

}
export default Counter