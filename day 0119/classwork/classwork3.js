const main = document.getElementById("main");
const select = document.querySelector("select");
let products = [];

function render(productslist) {
    main.innerHTML = ""; // საჭიროა ძველის გაწმენდა
    for (let i = 0; i < productslist.length; i++) {
        main.innerHTML += `
        <section id="${productslist[i].id}">
            <h2>${productslist[i].title}</h2>
            <img src="${productslist[i].image}" width="150" />
            <p>${productslist[i].description}</p>
            <p>$${productslist[i].price}</p>
        </section>
        `;
    }
}
select.addEventListener("change", (e) => {
    let selectedCategory = e.target.value;
    let filteredList = products.filter((product) => product.category === selectedCategory);
    render(filteredList);
});
fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((data) => {
        products = data;
        render(products); 
    })
    .catch((err) => console.error("შეცდომა:", err));