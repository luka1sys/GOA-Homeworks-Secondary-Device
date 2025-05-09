// შექმენით ფუნქცია სახელად renderf რომელსაც 
// გადაცემთ მიღებულ პროდუქტების მასივს,
//  თვქვენი დავალებაა main ელემნტში გამოიტანოთ
//  ყველა პროდუქტი სექციებად

const main = document.getElementById("main");

function render(productslist) {
    for (let i = 0; i < productslist.length; i++) {
        main.innerHTML += `
        <section id="${productslist[i].id}">
            <h2>${productslist[i].title}</h2>
            <img src="${productslist[i].image}" width="150" />
            <p>${productslist[i].description}</p>
            <p>$${productslist[i].price}</p>
        </section>
        `
    }
}
fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((obj) => render(obj))
    .catch((err) => console.error(err));