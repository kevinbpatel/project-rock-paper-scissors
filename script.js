function getComputerChoice() { 

    let val = Math.floor(Math.random() * 3);

    if (val === 0) { 
        return "rock";
    } else if (val === 1) { 
        return "paper";
    } else { 
        return "scissors";
    }
}

function getHumanChoice() { 
    let input = prompt("What's your move!?:")

    return input.toLowerCase();



}

function playRound(humanChoice, computerChoice) { 

    console.log("humanChoice: " + humanChoice);
    console.log("computerChoice: " + computerChoice);
    
    switch (humanChoice + "-" + computerChoice) {
        case "rock-scissors":
            console.log("You win! Rock beats Scissors.");
            humanScore++;
            break;
        case "rock-paper":
            console.log("You lose! Paper beats Rock.");
            computerScore++;
            break;
        case "scissors-paper":
            console.log("You win! Scissors beat Paper.");
            humanScore++;
            break;
        case "paper-rock":
            console.log("You win! Paper beats Rock.");
            humanScore++;
            break;
        case "scissors-rock":
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
            break;
        case "paper-scissors":
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
            break;
        default:
            console.log("It's a tie!");
            // no one gets points
            break;
}
}

let humanScore = 0;
let computerScore = 0;



for (let i = 0; i < 5; i++) { 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}
