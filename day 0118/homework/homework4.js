// შექმენით ცვლადი სახელად shoppingCart (კალათა)  აქაც წინა დავალებების მსგავსად უნდა შეინახოთ new Promise
//  რომელსაც გადასცემთ ორ ფუნქციას (resolve,reject), შექმენით ორი ცვლადი cartItems რომელიც უდრის 
// პროდუქტების სიას,შექმენით მეორე ცვლადი სახელად requestedItem (მოთხოვნილი ნივთი/პროდუქტი),
//  შეამოწმეთ თუ cartItems - სიაში არსებობს requestedItem - ი (მოთხოვნილი ნივთი/პროდუქტი) 
// მაშინ resolve ფუნქციას გადაეცით `${requestedItem} is available at the moment` 
// (თქვენი მოთხოვნილი ნივთი/პროდუქტი ამ ეტაპზე ხელმისაწვდომია), 
// სხვა შემთხვევაში კი reject ფუნქციას გადაეცით `sorry we dont have the ${requestedItem}` 
// shoppingCart - ს დაუმატეთ then მეთოდი რომელიც დაბეჭდავს console - ში, რომ `${requestedItem}
//  is available at the moment` სხვა შემთხვევაში კი გამოიტანეთ, 
// რომ `sorry we dont have the ${requestedItem}` catch - მეთოდის გამოყენებით 
cartItems=["vatermelon","apple","pear","pech"]
requestedItem="apple"
shoppingCart=new Promise((resolve, reject) => {
    if(cartItems.includes(requestedItem)){
        resolve(`${requestedItem} is available at the moment`);
    }else{
        reject(`sorry we dont have the ${requestedItem}`);
    }
})
shoppingCart
.then(function(message){
    console.log(message);

})
.catch(function(error){
    console.log(error);
})