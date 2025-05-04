// შექმენით ცვლადი სახელად alarm (მაღვიძარა) აქაც წინა დავალებების მსგავსად უნდა 
// შეინახოთ new Promise რომელსაც გადასცემთ ორ ფუნქციას (resolve,reject), შექმენით ერთი
//  ცვლადი სახელად currentTime რომელშიც შეინახავთ დღევანდელი დღის საათს 
// (მინიშნება უნდა გამოიყენეოთ Date ობიექტი new Date().getHours()),
//  შექმენით მეორე ცვლადი სახელად wakeUpTime რომელშიც დაწერთ იმ დროს რომელ დროსაც გინდათ,
//  რომ დარეკოს მაღვიძარამ (alarm), შეამოწმეთ
//  თუ currentTime - ის მნიშვნელობა უდრის wakeUpTime - ის მნიშვნელობას მაშინ resolve ფუნქციაში დაწერეთ
//  'Wake up it is time to start the day', სხვა შემთხვევაში კი reject ფუნქციას გადაეცით 
// 'You can sleep a bit longer', alarm - ს დაუმატეთ then მეთოდი რომელიც
//  დაბეჭდავს console - ში, რომ 'Wake up it is time to start the day' სხვა შემთხვევაში კი გამოიტანეთ,
//  რომ 'You can sleep a bit longer' catch - მეთოდის გამოყენებით




currentTime=new Date().getHours();
wakeUpTime=7
alarm=new Promise((resolve, reject) => {
    if(currentTime==wakeUpTime){
        resolve('Wake up it is time to start the day');
    }else{
        reject('You can sleep a bit longer')
    }  
})
alarm
.then(function(message){
    console.log(message);
})
.catch(function(error){
    console.log(error)
});