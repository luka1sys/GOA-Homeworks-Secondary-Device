//  წამოიღეთ მომხმარებლების მონაცემები ამ მისამართის 
// გამოყენებით https://jsonplaceholder.typicode.com/users, გააკეთეთ Friend list ის მსგავსი,
//  სადაც სერვერის მიერ დაბრუნებულ მონაცემებს დაარენდერებთ. (დაახლოებით Facebook friend list მსგავსია)
const main = document.getElementById("main");
function render(posts) {
    for (const post of posts) {
        main.innerHTML += `
        <div>
        <P>${post.username}</P>
        <P>${post.name}</P>
        <P>${post.street}</P>
        </div>
        `
    }
}
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((obj) => render(obj))




