/* Defining the helper function for fetching the computer choice*/
function getComputerChoice(){
    let array = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomComputerChoice = array[randomIndex];
    return randomComputerChoice.toLowerCase();
}

// Testing the random computer choice function:
//console.log(getComputerChoice());

/* Defining the function for receiving user input*/

function getHumanChoice(){
    let inp ;
    while(true){
        inp = prompt("Enter your choice (Rock/Paper/Scissors): ");
        if (inp.toLowerCase() == "rock" || inp.toLowerCase() == "paper" || inp.toLowerCase() == "scissors" ){
            break;
        } else {
            alert(`Choice entered by you: ${inp}\nIt is an invalid choice! Please Choose from options:\nRock/Paper/Scissors.`)
        }
    }
    return inp.toLowerCase();
}

/* Defining the game with 5 rounds as default*/

// Initialising scores & rounds variables
let humanScore = 0, computerScore = 0;
let rounds = 5;
// Creating an object for placing results
const result = document.querySelector(".result");
const scoreboard = document.querySelector(".scoreboard");
const score = document.querySelector(".score");
const message = document.querySelector(".message h1");

// Defining the function that simulates one round of the game
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors"){
        //console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        result.textContent = `You chose ${humanChoice} & computer chose ${computerChoice}.\nYou win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
        rounds--;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        //console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        result.textContent = `You chose ${humanChoice} & computer chose ${computerChoice}.\nYou win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
        rounds--;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        //console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        result.textContent = `You chose ${humanChoice} & computer chose ${computerChoice}.\nYou win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
        rounds--;
    } else if (humanChoice === computerChoice ){
        //console.log(`Game Tied! Both players chose ${humanChoice}.`);
        result.textContent = `You chose ${humanChoice} & computer chose ${computerChoice}.\nGame Tied! Both players chose ${humanChoice}.`;
        rounds--;
    } else {
        //console.log(`You loose, ${computerChoice} beats ${humanChoice}!`);
        result.textContent = `You chose ${humanChoice} & computer chose ${computerChoice}.\nYou loose, ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
        rounds--;
    }
}

//Defining & handling click events:
const btn_rock = document.querySelector(".btn_rock");

btn_rock.addEventListener("click",() => {
    //Clearing Scoreboard:
    scoreboard.textContent = '';
    score.textContent = '';
    message.textContent = '';
    message.className = '';
    // Playing a round of Rock-Paper-Scissors
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    // Updating scoreboard after 5 games:
    if (rounds === 0)
    {
        scoreboard.textContent = `Game of 5 rounds is now complete! Let's look at the scores.`
        score.textContent = `User Score = ${humanScore} | Computer Score = ${computerScore}`
        if (humanScore > computerScore){
            message.textContent = `Yaay! You win. Congratulations!!!`;
            message.classList.add("green");
            } else if (humanScore < computerScore){
                message.textContent = `You lost! Better luck next time.`;
                message.classList.add("red");
            } else {
                message.textContent = `Game tied! Wanna play again?`;
                message.classList.add("yellow");
            }
        rounds = 5;
        humanScore = 0, computerScore = 0;
    }
})

const btn_paper = document.querySelector(".btn_paper");
btn_paper.addEventListener("click",() => {
    //Clearing Scoreboard:
    scoreboard.textContent = '';
    score.textContent = '';
    message.textContent = '';
    message.className = '';
    // Playing a round of Rock-Paper-Scissors
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    // Updating scoreboard after 5 games:
    if (rounds === 0)
        {
            scoreboard.textContent = `Game of 5 rounds is now complete! Let's look at the scores.`
            score.textContent = `User Score = ${humanScore} | Computer Score = ${computerScore}`
            if (humanScore > computerScore){
                message.textContent = `Yaay! You win. Congratulations!!!`;
                message.classList.add("green");
                } else if (humanScore < computerScore){
                    message.textContent = `You lost! Better luck next time.`;
                    message.classList.add("red");
                } else {
                    message.textContent = `Game tied! Wanna play again?`;
                    message.classList.add("yellow");
                }
            rounds = 5;
            humanScore = 0, computerScore = 0;
        }
})

const btn_scissors = document.querySelector(".btn_scissors");
btn_scissors.addEventListener("click",() => {
    //Clearing Scoreboard:
    scoreboard.textContent = '';
    score.textContent = '';
    message.textContent = '';
    message.className = '';
    // Playing a round of Rock-Paper-Scissors
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    // Updating scoreboard after 5 games:
    if (rounds === 0)
        {
            scoreboard.textContent = `Game of 5 rounds is now complete! Let's look at the scores.`
            score.textContent = `User Score = ${humanScore} | Computer Score = ${computerScore}`
            if (humanScore > computerScore){
                message.textContent = `Yaay! You win. Congratulations!!!`;
                message.classList.add("green");
                } else if (humanScore < computerScore){
                    message.textContent = `You lost! Better luck next time.`;
                    message.classList.add("red");
                } else {
                    message.textContent = `Game tied! Wanna play again?`;
                    message.classList.add("yellow");
                }
            rounds = 5;
            humanScore = 0, computerScore = 0;
        }
})
