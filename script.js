function getComputerChoice(){
    let number = Math.random();
    if (number < 0.33) {
        return "rock";
    } else if (number < 0.66) {
        return "paper";
    } else {
        return "scissors"       
    }
}

function getHumanChoice() {
    while (true) {
        let answer = prompt("Which do you choose?\n[R] - Rock\n[P] - Paper\n[S] - Scissors")

        if (!answer) continue;
        
        const choice = answer.trim().toLowerCase();
        
        if (choice === "r" || choice === "rock") return "rock";
        if (choice === "p" || choice === "paper") return "paper";
        if (choice === "s" || choice === "scissors") return "scissors";
    
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "You both chose " + humanChoice + ". You both live.";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "You win!\n You chose " + humanChoice + " and the cpu chose " + computerChoice + ". Good Game!";
    } else {
        computerScore++;
        return "You lost...\n The cpu chose " + computerChoice + " and you chose " + humanChoice + ". Good Game!";
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        const player = getHumanChoice();
        const cpu = getComputerChoice();
        console.log(playRound(player, cpu))
    }
    console.log(`Final score: You ${humanScore} - CPU ${computerScore}`);
}

playGame();