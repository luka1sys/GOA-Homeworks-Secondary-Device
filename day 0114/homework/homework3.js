let randomNumber = Math.floor(Math.random() * 20)
console.log(randomNumber)
const form = document.getElementById("form_")
count = 0;
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = document.getElementById("input_");
    const input1 = Number(input.value);

    if (input1 > randomNumber) {
        alert("Number is Too high Try again");

    }
    else if (input1 < randomNumber) {
        alert("Number is Too low Try again");

    }
    else {
        alert("yes")
        count
        alert(`Number of attempts ${count}`)
    }
    count++
    if (count == 10) {
        alert("თქვენ ამოგეწურათ მცდელობები")
    }
    input.value = "";

})