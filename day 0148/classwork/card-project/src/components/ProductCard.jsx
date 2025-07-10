import { useContext, useState } from "react"
import { cartContext } from "../context/CartContext"

const ProductCard = ({ id, name, price, image }) => {

    const {addToCart} = useContext(cartContext)
    return (
        <div>

            <li>
                <h3>{name}</h3>
                <p>{price}</p>
                <button onClick={() =>addToCart(id)}>add to card</button>
            </li>
            
        </div>
    )

}
export default ProductCard