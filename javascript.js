console.log("Let's build the game Rack-Paper-Scissors!");
console.log("-".repeat(55));
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

// Testing the user input function:
//console.log(getHumanChoice());


/* Defining the game with 5 rounds as default*/

function playGame(){
    // Scores 
let humanScore = 0, computerScore = 0;
let rounds = 5;
console.log(`\nLet's play ${rounds} rounds of Rock-Paper-Scissors!`);

// Defining the function that simulates one round of the game
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if (humanChoice === computerChoice ){
        console.log(`Game Tied! Both players chose ${humanChoice}.`);
    } else {
        console.log(`You loose, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}
let loopItr = rounds;
while (loopItr > 0) {
    alert(`Let's play round ${rounds - loopItr + 1}.`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`Round ${rounds - loopItr + 1} complete!`);
    loopItr--;
}
console.log("-".repeat(55));
console.log(`Game of ${rounds} rounds is now complete! Let's look at the scores.`);
console.log(`Scorecard:\n
Players: User vs Computer\n
User Score = ${humanScore}\n
Computer Score = ${computerScore} `);
console.log("-".repeat(55));
if (humanScore > computerScore){
    console.log(`Yaay! You win. Congratulations!!!`);
}else if (humanScore < computerScore){
    console.log(`You lost! Better luck next time.`);
}else {
    console.log(`Game tied! Wanna play again?`);
}
}

playGame();
