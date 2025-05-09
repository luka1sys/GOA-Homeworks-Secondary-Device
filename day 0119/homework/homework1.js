//  შექმენით website - ი სადაც თქვენ გექნებათ პრუდუქტები, fetch - ის გამოყენებით
//  ლინკზე https://fakestoreapi.com/products/ გააგზავნეთ მოთხოვნა,
//  ამ ლინკიდან ტექსტური მონაცემი გადააქციეთ javascript - ის ობიექტად json - ფორმატის გამოყენებით რომელითაც
//  თქვენ შეგეძლებათ მის კუთვნილებებზე და მნიშვნელობებზე წვდომის მიღება, საიტზე უნდა
//  გქონდეთ ერთი `<main></main>` თეგი რომლეზეც მიიღებთ წვდომას, ასევე უნდა დაწეროთ კოდი რომელიც
//  ამ https://fakestoreapi.com/products/ ლინკიდან ყველა პროდუქტის ინფორმაციას
//  როგორიცაა (image,description,title,price) გამოიტანს website - ზე, თქვენი დავალებაა,
//  რომ თითოეულ პროდუქტზე დაამატოთ ღილაკი `<button></button>` რომელზე დაჭერისას
//  პროდუქტი ყოველ ჯერზე უნდა დაემატოს ერთ მასივში სახელად `products = []` რომელიც
//  თავიდან არის ცარიელი, ამ ღილაკზე დაჭერისას თქვენ website - ზე უნდა გამოიტნოთ კონკრეტული
//  product - ი რომელიც დაემატა მასივში, შექმენით ერთი კალათა website - ის დასაწყისში,
//  პროდუქტის ღილაკზე დაჭერისას თქვენი პროდუქტი უნდა დაემატოს ამ კალათაში რომლის
//  უკანა ფერი იქნება ნაცრისფერი (gray), ეს პროდუქტი უნდა დაემატოს თავისი (image,description,title,price) - ით 
let cartList = [];

const main = document.querySelector("main");
const cart = document.getElementById("cartdiv");

function render(productlist) {
    main.innerHTML = ""; // ძველი პროდუქციის გაწმენდა

    for (const product of productlist) {
        const section = document.createElement("section"); // ვქმნით section-ს
        section.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" width="100px"/>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button>add to cart</button>
        `;

        const button = section.querySelector("button");
        button.addEventListener("click", function () {
            cartList.push(product);
            renderCart();
        });

        main.appendChild(section);
    }
}

function renderCart() {
    cart.innerHTML = "";

    for (const item of cartList) {
        const productDiv = document.createElement("section");
        productDiv.style.backgroundColor = "gray";
        productDiv.innerHTML = `
            <h3>${item.title}</h3>
            <img src="${item.image}" width="100px"/>
            <p>${item.description}</p>
            <p>${item.price}</p>
        `;
        cart.appendChild(productDiv);
    }
}

fetch("https://fakestoreapi.com/products/")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        render(data);
    });