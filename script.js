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
     if(computerChoice.textContent == "Rock" && yourChoice.textContent == "Paper"){
result.textContent = "You Win!"
        score++;
        scoreDisplay.textContent = Number(score);
    }
     if(computerChoice.textContent == "Rock" && yourChoice.textContent == "Scissor"){
result.textContent = "You Lost!"
        score++;
        scoreDisplay.textContent = Number(score);
    }
     if(computerChoice.textContent == "Paper" && yourChoice.textContent == "Scissor"){
        result.textContent = "You Win!"
        score++;
        scoreDisplay.textContent = Number(score);
    }
     if(computerChoice.textContent == "Scissor" && yourChoice.textContent == "Rock"){
result.textContent = "You Win!"
        score++;
        scoreDisplay.textContent = Number(score);
    }
     if(computerChoice.textContent == "Paper" && yourChoice.textContent == "Rock"){
result.textContent = "You Lost!"
    }
     if(computerChoice.textContent == "Scissor" && yourChoice.textContent == "Paper"){
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
