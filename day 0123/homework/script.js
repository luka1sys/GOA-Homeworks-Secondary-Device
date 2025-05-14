// თქვენ უნდა გქონდეთ ერთი folder - ი სახელად database მასში უნდა შეინახოთ ერთი ფაილი
//  სახელად localStorage.js, თქვენი დავალებაა, რომ ამ ფაილში 
// შექმნათ ორი ფუნქცია 1) store 2) get რომლებსაც დაა - export - ებთ,
//  შექმენით მეორე folder - ი სახლად model - მასში შეინახეთ ფაილი სახელად user.model.js
//  - უნდა შექმნათ ერთი class - ი სახელად User - რომლითაც თქვენ შექმნით მომხმარებლის ობიექტს, 
// ამ მომხმარებლის ობიექტს უნდა ქონდეს constructor - ი, 
// ამის მიხედვით შექმენით მომხმარებლის ობიექტი (დაამატეთ კუთვნილებები  და მნიშვნელობები) 
// - მომხმარებლის ობიექტს უნდა ქონდეს უნკიალური (შემთხვევითი ID) მინიშნება: გამოიყენეთ Date, 
// store მეთოდით შეინახეთ მასივი რომელშიც დამატებული იქნება ყველა მომხმარებელი (ვინც დარეგისტრირდა), 
// უნდა შექმნათ ერთი ფაილი index.html სადაც შექმნით სარეგისტრაციო ფორმას, 
// უნდა გქონდეთ package.json "type":module - ით,
// შექმნით კიდევ ერთი ფაილი script.js - რითაც თქვენ უნდა წამოიღოთ მომხმარებლის მიერ შემოტანილი ინფორმაცია
//  <input></input> - ებიდან

import { User } from './model/user.model.js';
import { store, get } from './database/localstorage.js';
const form = document.getElementById("form")
form.addEventListener("submit", function (e) {
    e.preventDefault();



    const email = document.getElementById("email").value;

    const pass = document.getElementById("pass").value;

    const name = document.getElementById("name").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.!");
        return;
    }

    if (pass.length < 6) {
        alert("Password must contain at least 6 characters.!");
        return;
    }

    const newUser = new User(name, email, pass);


    const users = [];

    users.push(newUser)

    console.log(users)

    alert('User added successfully!');
    store('users', users);

    form.reset()





})


