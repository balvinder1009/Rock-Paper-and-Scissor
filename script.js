const outcomes = ["Rock", "Paper", "Scissor"]

let userChoice = "";
let score = 0;
let computerChoice = document.querySelector("#computers_choice");
let yourChoice = document.querySelector("#your_choice");
let result = document.querySelector("#result");
let scoreDisplay = document.querySelector("#score");


const getComputerChoice = (arr) => {
    let randomNum = Math.floor(Math.random() * arr.length);
    // console.log(randomNum);
    computerChoice.textContent = arr[randomNum];
}

const getResult = () => {
    if(computerChoice.textContent == yourChoice.textContent){
result.textContent = "It's a draw!"
        scoreDisplay.textContent = Number(score);
    }
     if(computerChoice == "rock" and yourChoice == "paper"){
result.textContent = "You Win!"
        score++;
    }
     if(computerChoice == "paper" and yourChoice == "scissors"){
result.textContent = "You Win!"
        score++;
    }
     if(computerChoice == "scissors" and yourChoice == "rock"){
result.textContent = "You Win!"
        score++;
    }
     if(computerChoice == "paper" and yourChoice == "rock"){
result.textContent = "You Lost!"
    }
     if(computerChoice == "scissor" and yourChoice == "paper"){
result.textContent = "You Lost!"
    }
}

const timer = () => {
    let seconds = 1;
    var answerTimeOut = setInterval(() => {
        if(seconds <= 3){
            computerChoice.textContent = seconds++;
        }
    }, 1000)
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        timer()
        setTimeout(() => {
            getComputerChoice(outcomes);
            getResult();
        }, 4000);
        userChoice = e.target.id;
        yourChoice.textContent = userChoice;
        clearInterval(answerTimeOut);
    })
});
