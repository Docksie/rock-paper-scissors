let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let number = Math.random();
    if (number < 0.33) return "rock";
    else if (number < 0.66) return "paper";
    else return "scissors";
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
    }

    const win = (humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper");

    if (win) {
        humanScore++;
        return "You win!\n You chose " + humanChoice + " and the cpu chose " + computerChoice + ". Good Game!";
    } else {
        computerScore++;
        return "You lost...\n The cpu chose " + computerChoice + " and you chose " + humanChoice + ". Good Game!";
    }
}

document.querySelectorAll("button[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        document.getElementById("result").textContent = result;
        document.getElementById("human-score").textContent = humanScore;
        document.getElementById("computer-score").textContent = computerScore;
    })
})