// როდესაც ფუნქცია დააბრუნებს ობიექტს, მაგ ობიექტიდან destruction (დესტრუქციის მეშვეობით ამოიღეთ მნიშვლებობი)

function copyObj(x1, x2) {
    for (let key in x2) {
        x1[key] = x2[key];
    }
    return x1;
}
let  object1 = { a: 3};
let object2 = { b: 2, c: 5 };
let y = copyObj(obj1, obj2);
let (a,b,c)=y;



