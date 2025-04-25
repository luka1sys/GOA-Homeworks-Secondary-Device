// რეგისტრაციისა და შესვლის ფორმებზე წვდომის მოპოვება
const registrationForm = document.querySelector("#registration");
const signinForm = document.querySelector("#signin");

// ინახავს დარეგისტრირებულ მომხმარებლებს
const users = [];

// ასოები, ციფრები და პუნქტუაციის სიმბოლოები ვალიდაციისთვის
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const punctuationChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

// პაროლის ვალიდაციის ფუნქცია ამოწმებს, შეიცავს თუ არა ასოს, ციფრს და პუნქტუაციას
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

    // თუ ყველა პირობა დაკმაყოფილდა, აბრუნებს true-ს
    return hasAlphabet && hasDigits && hasPunctuation;
}

// რეგისტრაციის ფორმას ვუსმენთ addEventListener ით როცა დაკლიკება მოხდება ფუნქცია გაეშვება
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // გვერდის გადატვირთვის თავიდან აცილება

    // ამოწმებს, უკვე არსებობს თუ არა ასეთი იმეილით მომხმარებელი
    const userExsist = users.find((user) => user.email === registrationForm.email.value);

    if (userExsist) {
        alert("Email უკვე რეგისტრირებულია");
        registrationForm.reset(); // ფორმის გასუფთავება
        return;
    }

    // ამოწმებს პაროლის სიძლიერეს
    if (!isValidPassword(registrationForm.newPassword.value)) {
        alert("პაროლი უნდა შეიცავდეს ციფრს, ასოს და სიმბოლოს");
        registrationForm.reset();
        return;
    }

    // ამოწმებს, სწორად განმეორდა თუ არა პაროლი
    if (registrationForm.newPassword.value !== registrationForm.repeatPassword.value) {
        alert("განმეორებული პაროლი არ ემთხვევა!");
        registrationForm.reset();
        return;
    }

    // ქმნის მომხმარებელს და ამატებს სიაში
    const user = {
        email: registrationForm.email.value,
        pass: registrationForm.newPassword.value
    }
    users.push(user);
    registrationForm.reset(); // ფორმის გასუფთავება რეგისტრაციის შემდეგ
});