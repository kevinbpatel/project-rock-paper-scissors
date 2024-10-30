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

    results.textContent = `Player: ${humanChoice}
    Computer: ${computerChoice}`;

    
    switch (humanChoice + "-" + computerChoice) {
        case "rock-scissors":
            console.log("You win! Rock beats Scissors.");
            results.textContent  += " --  You win! Rock beats Scissors.";
            humanScore++;
            break;
        case "rock-paper":
            console.log("You lose! Paper beats Rock.");
            results.textContent  += " --  you lose! Paper beats Rock.";
            computerScore++;
            break;
        case "scissors-paper":
            console.log("You win! Scissors beat Paper.");
            results.textContent  += " --  You win! Rock beats Scissors.";
            humanScore++;
            break;
        case "paper-rock":
            console.log("You win! Paper beats Rock.");
            results.textContent  += " --  You win! Rock beats Scissors.";
            humanScore++;
            break;
        case "scissors-rock":
            console.log("You lose! Rock beats Scissors.");
            results.textContent  += " --  you lose! Paper beats Rock.";
            computerScore++;
            break;
        case "paper-scissors":
            console.log("You lose! Scissors beat Paper.");
            results.textContent  += " --  you lose! Paper beats Rock.";
            computerScore++;
            break;
        default:
            console.log("It's a tie!");
            results.textContent  += " --  It's a tie!";
            // no one gets points
            break;
    }

    if (humanScore == 5) { 
        results.textContent = "PLAYER WINGS THE GAME!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) { 
        results.textContent = "COMPUTER WINGS THE GAME!";
        computerScore = 0;
        humanScore = 0;
    }

    score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`

}

let humanScore = 0;
let computerScore = 0;


const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let results = document.querySelector(".results");

let score = document.querySelector(".score");

let playerSelection = "";


rockBtn.addEventListener("click", function (e) { 
    playerSelection = "rock";
    playRound(playerSelection, getComputerChoice());

});

paperBtn.addEventListener("click", function (e) { 
    playerSelection = "paper";
    playRound(playerSelection, getComputerChoice());

});

scissorsBtn.addEventListener("click", function (e) { 
    playerSelection = "scissors";
    playRound(playerSelection, getComputerChoice());
});



