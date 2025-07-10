import { useState } from "react";
import { Cart } from "./components/Cart";
import ProductList from "./components/ProductList"

import { cartContext } from "./context/CartContext";
const products = [
  {
    id: 1,
    name: "MacBook Pro 14\"",
    price: 1999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "iPad Air",
    price: 599,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Apple Watch",
    price: 399,
    image: "https://via.placeholder.com/150",
  },
];

function App() {
  const [cart, setCart] = useState([])
  const addToCart = (id) => {
    const product = products.find(product => product.id === id)
    setCart([...cart, product])
  
  }
  
  return (
    <>
      <cartContext.Provider value={{cart,addToCart}}>
        <Cart/>
        <ProductList products={products} />
      </cartContext.Provider>
    </>
  )
}

export default App
