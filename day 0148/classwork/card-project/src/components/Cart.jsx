import { useContext } from "react"
import { cartContext } from "../context/CartContext"
import ProductCard from "./ProductCard"

export const Cart = () => {
    const { cart } = useContext(cartContext)

    return (
        <div>
            <h2>cart</h2>
            <ul>
                {cart.map(product => {
                    return (
                        <ProductCard {...product} />

                    )
                })}
            </ul>


        </div>
    )
}