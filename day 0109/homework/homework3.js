const spanList = document.getElementsByTagName("span");
const choisP = document.getElementById("chois");
const result = document.querySelector("h3");
const btns = document.getElementsByTagName("button");

let userScore = 0;
let pcScore = 0;

const choisList = ["Rock", "Paper", "Scissors"];

const randomChois = () => {
    return choisList[Math.floor(Math.random() * 3)];
}

const mainFunc = (userChois) => {
    const pcChois = randomChois();

    choisP.textContent = `Computer chois: ${pcChois}`;
    
    if(userChois === pcChois) {
        result.textContent = "Result: Draw!";
    } else if(userChois === "Rock" && pcChois === "Scissors" || 
    userChois === "Scissors" && pcChois === "Paper" || userChois === "Paper" && pcChois === "Rock") {
        result.textContent = "Result: You win!";
        userScore++;
        spanList[0].textContent = userScore;
    } else {
        result.textContent = "Result: You Lose!";
        pcScore++;
        spanList[1].textContent = pcScore;
    }
}
btns[0].addEventListener("click", () => {
    mainFunc("Rock")
})
btns[1].addEventListener("click", () => {
    mainFunc("Paper")
})

btns[2].addEventListener("click", () => {
    mainFunc("Scissors")
})