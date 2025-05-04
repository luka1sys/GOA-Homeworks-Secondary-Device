// შექმენით ცვლადი სახელად checkPassword (პაროლის შემოწმება) აქაც წინა დავალებების
//  მსგავსად უნდა შეინახოთ new Promise რომელსაც გადასცემთ ორ ფუნქციას (resolve,reject), შექმენით ორი
//  ცვლადი correctPass, enteredPass რომლებსაც გადასცემთ თქვენთვის სასურველ მნიშვნელობებს თქვენი დავალებაა, 
// რომ შეამოწმოთ, თუ ჩვენ მიერ შეყვანილი Password რომელიც ინახება enteredPass - ში, უდრის 
// correctPass (სწორ პაროლს) მაშინ resolve ფუნქციას გადაეცით 'Access granted' სხვა შემთხვევაში
//  კი reject ფუნქციას გადეცით 'Access Denied Try again later', checkPassword - ს დაუმატეთ then მეთოდი
//  რომელიც დაბეჭდავს console - ში, რომ 'Access granted' სხვა შემთხვევაში კი გამოიტანეთ,
//  რომ 'Access Denied Try again later' catch - მეთოდის გამოყენებით

enteredPass="luksona"
correctPass="luksona"

checkPassword=new Promise((resolve, reject) => {
    if(enteredPass==correctPass){
        resolve('Access granted');
    }else{
        reject('Access Denied Try again later');
    }
})
checkPassword
.then(function(message){
    console.log(message);
})
.catch(function(error){
    console.log(error);
})
