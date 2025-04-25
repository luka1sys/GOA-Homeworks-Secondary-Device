const form = document.getElementById("form_");
const userList = [];
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("user_").value.trim();
    const email = document.getElementById("email_").value.trim();
    const pass = document.getElementById("pass_").value.trim();
    if (!username || !email || !pass) {
        alert("Please fill out all fields");
        return;
    }
    const emailText = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailText.test(email)) {
        alert("Please enter a valid email address");
        return;
    };
    if (pass.length < 6) {
        alert("Please enter at least 6 characters.");
        return;
    };
    const newUser={
        username:username,
        email:email,
        password:pass,
    };
    userList.push(newUser);
    console.log(userList);
    form.reset();
})
