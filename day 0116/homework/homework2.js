//   შექმენით რეგისტრაციის ფორმა სადაც მომხმარებელი, შემოიტანს თავის Name,Email,Password - ს 
//   თქვენი დავალებაა, რომ ამ ფორმას დაამატოთ ვალიდაცია, ღილაკზე დაჭერისას წამოიღოთ თითოეული
//    <input></input> თეგიდან ინფორმაცია, უნდა გქონდეთ ერთი Class - ი სახელად User{} - ი
//     სადაც თქვენ ჩაამატებთ ამ მომხმარებლის Name Email Password - ს (გამოიყენეთ constructor - ი 
//      რომელსაც არგუმენტად მიანიჭებთ (name,email,password) - ს) Class User{} - ში 
//      თქვენ უნდა გქონდეთ getter and setter - მეთოდები, უნდა გქონდეთ get name() - ი 
//      რომელიც დააბრუნებს მომხმარებლის სახელს, უნდა შექმნათ set password(newPass) რომელიც
//       შეამოწმებს პაროლს, შეამოწმეთ თუ პაროლი შეადგენს 4 - ზე მეტ სიმბოლოს, 
//       რაიმე რიცხვს ან აქვს პუნქტუაციის რომელიღაცა სიმბოლო მაშინ პაროლი განაახლეთ სხვა შემთხვევაში
//        კი უნდა გათიშოთ setter - ი. უნდა გქონდეთ users - მასივი სადაც თქვენ ჩაამატებთ მომხმარებლის
//         ინფორმაციას, Class User{} - ით შექმნილი ობიექტის მიხედვით შექმენით ერთი ცვლადი რომელშიც
//          შეინახავთ მომხარებლის ინფორმაციას new User() - ის გამოყენებით, შექმნილი ცვლადი უნდა ჩაამატოთ 
//          users - მასივში და საბოლოო შედეგი გამოიტანოთ console - ში 

const form = document.getElementById("form_");
users = [];
form.addEventListener("submit", function (e) {

    e.preventDefault();
    const name = document.getElementById("name_").value;
    const email = document.getElementById("email_").value;
    const pass = document.getElementById("pass_").value;

    class User {
        constructor(name, email, pass) {
            this._name = name,
                this._email = email,
                this._pass = pass
        }
        get name() {
            return this._name
        };
        set password(newPass) {
            const containsNumber = /\d/;
            if (newPass.length > 4 && containsNumber.test(newPass)) {
                this._pass = newPass;
            } else {
                console.log("try again")
            };
        };
    };
    const newUser = new User(name, email, pass)
    console.log(newUser.name)
    users.push(newUser)
    console.log(users)
});

