function copyObj(x1, x2) {
    return Object.assign(x1, x2);
}
let  object1 = { a: 3};
let object2 = { b: 2, c: 5 };
let y = copyObj(obj1, obj2);
let {a,b,c}=y;
