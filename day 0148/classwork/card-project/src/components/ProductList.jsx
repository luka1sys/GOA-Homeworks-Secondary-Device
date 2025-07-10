
import ProductCard from "./ProductCard";
const ProductList = ({products}) => {


    return (
        <div>
            <h2>Product list  </h2>
            <ul>
                {
                    products.map(product =>{
                        return(
                            <ProductCard key={product.id} {...product}/>
                        )  
                        
                    } )
                }

            </ul>
        </div>
    )
}
export default ProductList