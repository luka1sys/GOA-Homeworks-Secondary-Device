const obj={
    name:"luka",
    surname:"dgebuadze",
    age:"16",
    hobby:"My hobby is hunting."
}
const { name, hobby, ...rest } =obj;
console.log(name);
console.log(hobby);
console.log(rest)