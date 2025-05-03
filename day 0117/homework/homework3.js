// შექმენით Class - ი სახელად Dog რომელსაც ექნება ორი კუთვნილება(name და age) ეს კუთვნილებები დაამატეთ
//  ობიექტში დაამატეთ კიდევ  ერთი კუთვნილება ობიექტში energyLevel რომელიც უდრის = 100%, უნდა გქონდეთ
//   მეთოდი სახელად run() რომელშიც თქვენ energyLevel - ის მნიშვნელობას შეამცირებთ 10 - ით და დაწერთ, რომ
//`Dog named ${name} Is now Running which means that it has lost 10 energy and it's energy Level now is ${energyLevel}`,
//     შექმენით მეორე მეთოდი rest() რომელშიც energyLevel - კუთვნილების
//      მნიშვნელობა გაიზრდება 5 - ით ეს ნიშნავს რომ უკვე Dog - ის energyLevel - ი უდრის 5 ენერგიით
//      მეტს ამის შემდეგ
//      დაწერთ, რომ `$Dog named {name} Is now resting which means that it's energy Level is now ${energyLevel}`,
//      შექმენით მესამე მეთოდი სახელად
//      showStatus - რომელიც დაბეჭდავს ამ ძაღლის სახელს ასაკს და საბოლოო energyLevel - ს,არგუმენტების ნაცვლად
//      ჩაწერეთ თქვენთვის სასურეველი მნიშვნელობები და საბოლოო შედეგი გამოიტანეთ console - ში
class Dog {
    constructor(name, age) {
        this.name = name,
            this.age = age,
            this.energyLevel = 100
    };
    run() {
        this.energyLevel -= 10;
        console.log(`Dog named ${this.name} Is now Running which means that it has 
            ost 10 energy and it's energy Level now is ${this.energyLevel}`);

    };
    reset() {
        this.energyLevel += 5;
        console.log(`Dog named ${this.name} Is now resting which means that it's energy Level is now ${this.energyLevel}`)

    }
    showStatus() {
        console.log(this.name, this.age, this.energyLevel);
    }
}
const favoriteDog = new Dog("bax", 4);
favoriteDog.run();
favoriteDog.reset();
favoriteDog.showStatus();


