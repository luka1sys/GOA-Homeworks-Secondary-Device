// შექმენით ცვლადი სახელად coffeeOrder (ყავის შეკევთა) სადაც თქვენ შეინახავთ
// new Promise - ს რომელსაც გადასცემთ ორ ფუნქციას (resolve,reject), შექმნით მეორე ცვლადი
//  სახელად isorderSuccessful რომლშიც შეინახავთ Boolean მნიშვნელობას true ან false შეამოწმეთ
//  if statment - ის გამოყებით თუ isorderSuccessful ცვლადში ინახება true მაშინ გამოიძახეთ
//  resolve ფუნქცია რომელშიც დაწერთ,რომ 'Your Coffee is Ready' (თქვენი ყავა მზადაა) სხვა
//  შემთხვევაში თუ თქვენი isorderSuccessful ცვლადი ინახავს false მნიშვნელობას მაშინ გამოიძახეთ
// reject ფუნქცია რომელშიც დაწერთ, რომ 'Your order had been declined', coffeeOrder - ს
//  დაუმტეთ then მეთოდი რომელიც დაბეჭდავს console - ში, რომ 'Your Coffee is Ready' სხვა
// შემთხვევაში კი გამოიტანეთ, რომ 'Your order had been declined' catch - მეთოდის გამოყენებით
let isorderSuccessful = true
let coffeeOrder = new Promise(function (resolve, reject) {
    if (isorderSuccessful) {
        resolve('Your Coffee is Ready');
    } else {
        reject('Your order had been declined')
    }

})
coffeeOrder
    .then(function (message) {
        console.log(message)

    })
    .catch(function (error) {
        console.log(error)

    })