// აიღეთ წინა გაკეთებული პროეტი (პროდუქტების) წინა გაკვეთილზე თქვენი დავალება იყო ის, 
// რომ ეს პროდუქტები რომლებიც წამოვიღეთ ამ https://fakestoreapi.com/products/ - ლინკიდან საიტზე 
// დაგე - render - ებინათ (საიტზე გამოგეტანათ), თქვენი დავალბაა, რომ დღევანდელ გაკვეთილზე ნასწავლი
//  async await - ი, გამოიყენოთ საიტეზე პროდუქტების დასა - render - ებლად


const main = document.getElementById("main");
function render(myproducts) {
    for (product of myproducts) {
        main.innerHTML += `
     <section>
            <h2 > ${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" width="100px"/>
            <p>${product.price}</p>
        </section>`
    }
}
const fethData = async (url) => {
    const res =await fetch(url);
    const data = await res.json();
    render(data);
}
fethData("https://fakestoreapi.com/products/");




