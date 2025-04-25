const form = document.querySelector("form");

const users = [];

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const punctuationChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

function isValidPassword(pass) {
    let hasAlphabet = false;
    let hasDigits = false;
    let hasPunctuation = false;

    for (let i = 0; i < pass.length; i++) {
        if (alphabet.includes(pass[i])) {
            hasAlphabet = true;
        }

        if (digits.includes(pass[i])) {
            hasDigits = true;
        }

        if (punctuationChars.includes(pass[i])) {
            hasPunctuation = true;
        }
    }

    return hasAlphabet && hasDigits && hasPunctuation
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isValidPassword(form.newPassword.value)) {
        alert("Pass must contain one digit, punctuation and alphabet");
        form.reset();
        return;
    }
    if (form.newPassword.value !== form.repeatPassword.value) {
        alert("Your repeated password is incorrect!");
        form.reset();
        return;
    }
    const user = {
        email: form.email.value,
        pass: form.newPassword.value
    }
    users.push(user);
    form.reset();
})