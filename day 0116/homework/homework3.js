// ვპოულობთ ფორმას HTML-დან ID-ის მიხედვით
const form = document.getElementById("form_");

// ვქმნით ცარიელ მასივს, სადაც შევინახავთ ყველა მომხმარებელს
users = [];

// ვუსმენთ ფორმის მოვლენას 
form.addEventListener("submit", function (e) {
    e.preventDefault(); // ვაჩერებთ გვერდის განახლებას

    // ვიღებთ input-ებიდან მომხმარებლის შეყვანილ მონაცემებს
    const name = document.getElementById("name_").value;
    const email = document.getElementById("email_").value;
    const pass = document.getElementById("pass_").value;

    // ვქმნით კლასს User რომელიც ინახავს მომხმარებლის ინფორმაციას
    class User {
        constructor(name, email, pass) {
            this._name = name,      // ვინახავთ სახელს
                this._email = email,    // ვინახავთ ელფოსტას
                this._pass = pass       // ვინახავთ პაროლს
        }

        // getter მეთოდი რომ დავაბრუნოთ  მომხმარებლის სახელი
        get name() {
            return this._name
        };

        // setter მეთოდი რომ შევცვალოთ პაროლი ვალიდაციის შემდეგ
        set password(newPass) {
            const containsNumber = /\d/; // ვამოწმებთ შეიცავს თუ არა ციფრს
            if (newPass.length > 4 && containsNumber.test(newPass)) {
                this._pass = newPass; // თუ პაროლი სწორია და აკმაყოფილებს მოთხოვნებს , ვცვლით
            } else {
                console.log("try again") // თუ არ აკმაყოფილებს მოთხოვნებს, ვბეჭდავთ შეცდომას
            };
        };
    };
    // ვქმნით ახალ მომხმარებელს
    const newUser = new User(name, email, pass);

    // ვბეჭდავთ მომხმარებლის სახელს კონსოლში
    console.log(newUser.name);

    // ვამატებთ მომხმარებელს users მასივში
    users.push(newUser);

    // ვბეჭდავთ მთელ users მასივს კონსოლში
    console.log(users);
});