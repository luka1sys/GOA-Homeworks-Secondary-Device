const p = document.getElementById("count");
const btn = document.getElementById("btn");
const btn2=document.getElementById("btn2")
let count = 0;
function increment() {
    count++;
    p.textContent = `Count: ${count}`;
};
function decrement (){
    count--;
    p.textContent=`count: ${count}`;
};
btn.onclick = increment;
btn2.onclick = decrement;

