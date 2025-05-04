//შექმენით ცვლადი სახელად fileDownload (ფაილის გადმოწერა) შეინახაეთ აქაც new Promise რომელსაც
// გადასცემთ ორ ფუნქციას (resolve,reject),შექმენით მეორე ცვლადი hasInternet (აქვს ინტერნეტი)
// რომელსაც გაუტოლებთ Boolean მნიშვნელობას ან true - ს ან false, შექმნეით setTimeout რომელშიც უნდა
// შეამოწმოთ, თუ ჩვენ მიერ შემნილი hasInternet ცვლადის მნიშვნელობა უდრის true - ს მაშინ resolve ფუნქციას
//  გადაეცით, 'File Downloaded successfully', სხვა შემთხვევაში თუ hasInternet ცვლადის მნივნელობა
//  უდრის false - მნიშვნელობას მაშინ reject ფუნქციას გადაეცით 'Check Your Internet Connection' ეს ყველაფერი
//  უნდა მოხდეს 2000 ms - ში (2 წამში), fileDownload - ს დაუმატეთ then მეთოდი რომელიც დაბეჭდავს console - ში,
//   რომ 'File Downloaded successfully' სხვა შემთხვევაში კი გამოიტანეთ, რომ 'Check Your Internet Connection'
//    catch - მეთოდის გამოყენებით
hasInternet = true 
fileDownload = new Promise((resolve, reject) => {
    setTimeout(function () {
        if (hasInternet) {
            resolve('File Downloaded successfully');
        } else {
            reject('Check Your Internet Connection')
        }
    }, 2000)

})
fileDownload
.then(function(message){
    console.log(message);

})
.catch(function(error){
    console.log(error)
})