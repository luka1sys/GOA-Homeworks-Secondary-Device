import { memo } from "react"
const MyText = memo(() => {
    console.log("hello")
    return (
        <h1>Hello From React</h1>


    )

})
export default MyText