let products = [];
function addProductToTheCart(product) {
    products.push(product);  
    console.log(products);
}
addProductToTheCart("luksona");

module.exports=addProductToTheCart
