const form = document.getElementById("form_");
const tbody = document.querySelector("tbody");
const users = [];
function generateID() {
    return 'ID-' + Math.floor(Math.random() * 1000000);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name_").value;
    const email = document.getElementById("email_").value;
    const pass = document.getElementById("pass_").value;

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if(!isValidEmail(email)){
        alert("Please enter a valid email address")
        return;
    }
    const CheckData = users.some(user =>
        user.name === name && user.email === email && user.password === pass

    );
    if (CheckData) {
        alert("There is a report with this data.");
        return;

    };

    const newUser = {
        id: generateID(),
        name: name,
        email: email,
        password: pass,
    };
    users.push(newUser);
    const tr = document.createElement("tr");
    tr.innerHTML =
        ` 
        <td>${newUser.name}</td>
        <td>${newUser.email}</td>
        <td>${newUser.pass}</td>
        <td>${newUser.id}</td>`
    tbody.appendChild(tr);
    form.reset();
});




