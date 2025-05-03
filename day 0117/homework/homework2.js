//   შექმენით Class - ი სახელად Person რომელსაც უნდა ქონდეს ორი კუთვნილება სახელი და გვარი, 
//  ამ Class-ს უნდა ქონდეს მეთოდი სახელად think ამ 
//  მეთოდში დაწერეთ `${name} Is Thinking` - string literal - ის გამოყენებით, 
//  შექმენით მეორე Class - ი  სახელად Student რომელიც მემკვიდრეობით მიიღებს 
//  იგივე constructor - ს და მეთოდებს Person Class - დან, თქვენი დავალებაა, 
//  რომ ამ Class - ის constructors - ს დაუმატოთ კიდევ ერთი კუთვნილება სახელად gradeLevel, 
//  გამოიძახეთ მშობელი Class - ის კონსტრუქტორი super - ის გამოყენებით, Student Class - ის ობიექტში 
//  დაამტეთ gradeLevel კუთვნილება, ამ Class - ს უნდა ქონდეს ერთი მეთოდი სახელად study() რომლსაც 
//  გადაეცემა subject - ი (საგანი) ამ მეთოდში დაწერეთ რომ Student - ი მეცადინეობს subject - ს და მისი 
//  ქულაა gradeLevel - ი, შექმენით ცლადი სადაც თქვენ ობიექტს გადასცემთ მნიშვნელობებს როგორიცაა სახელი,
//  გვარი და gradeLevel (ქულა) ამ ცვლადზე გამოიძახეთ think - მეთოდი, ასევე ცვლადზე გამოიძახეთ 
//  study მეთოდი და გადაეცით მას არგუმენტად რაიმე საგანი (subject) და საბოლოო შედეგები გამოიტანეთ console - ში 
class Person{
    constructor(name,surname){
        this.name=name,
        this.surname=surname
    };
    think(){
        `${this.name} Is Thinking`
    }
}
class Student extends Person {
    constructor(name, surname,gradeLevel){
        super(name,surname);
        this.gradeLevel=gradeLevel;

    }
    study(subject){
        console.log(`${this.name}  is studying ${subject} and his
score is ${this.gradeLevel}`)

    }
}
let student = new Student("luka", "dgebuadze", 24);
student.study("Mathematics");
student.think();

