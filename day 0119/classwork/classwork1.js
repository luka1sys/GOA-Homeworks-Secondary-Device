fetch(` https://fakestoreapi.com/products/`)
.then((res)=>res.json())
.then((obj)=>console.log(obj))