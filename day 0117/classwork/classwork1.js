// შექმენით კლასი სახელად Animal უნდა ჰქონდეს სამი კუთვნბილება, ცხოველის წონა, ფერი, ასაკი,
//   აგრეთვე უნდა ჰქონდეს ჭამის მეთოდი და წყლის დალევის მეთოდი, შემდეგ შექმენით Dog კლასი
//  რომელიც მემკვედრიებით მიიღებს Animal კლასის მეთოდებს და კონსტურქტოორს, Dog კლასს დამატებიტ ექნება
//  ერთი კუთვნელაბ სახელად ჯიში, პირველრგიში გამოიძახეთ მშობელი კლასის კონსტრუქტორი
//  super ფუყნქციით და შემდეგ დაამატეთ კუთვნილება, აგრეთვე კლასს უნდა ჰქონდეს walk მეთოდი და  bark მეთოდი

class Animal{
    constructor(weight, color, age){
        this._weight=weight,
        this._color=color,
        this._age=age
    };
    eat(){
        console.log(`animal eat fruit `)
    };
    drinkingWater(){
        console.log(`animal drinking water`)
    };
}
class Dog extends Animal{
    constructor(weight, color, age, breed){
        super(weight, color, age);
    }

}
const animals_ = new Animal("22kg","black","4 years ");
const dog_=new Dog("22kg","black","4 years ", "hask");

animals_.eat();
animals_.drinkingWater();
console.log(dog_);
console.log(animals_)

