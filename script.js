let playerScore = 0;
let computerScore = 0;

const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');

const images = document.querySelectorAll('img');
images.forEach((img) => img.addEventListener('click', () => {
    if (playerScore >=5 || computerScore >= 5) {
        return;
    }
    game(img.id);
}));

let game = (playerSelect) => {
    let playerSelection = playerSelect;
    let computerSelection = computerPlay();

    let round = playRound(playerSelection, computerSelection);

    roundResult.textContent = round;
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;

    if (playerScore === 5) {
        roundResult.textContent = "YOU WON!! GAME OVER."
    } else if (computerScore === 5) {
        roundResult.textContent = "YOU LOST! GAME OVER."
    }

    const resetBtn = document.querySelector('.newgame');
    resetBtn.addEventListener('click',() => location.reload());


};

let computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3);
            
        return (randomNum == 0) ? "rock"
            : (randomNum == 1) ? "paper"
            : "scissors";
};


let playRound = (playerSelection, computerSelection) => {
            
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            return ("You win! Rock beats Scissors");
        } else if (computerSelection === "paper") {
            computerScore++;
            return ("You lose! Paper beats Rock");
        } else {
            return ("You both chose Rock...");
        }
                
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return ("You win! Paper beats Rock");
        } else if (computerSelection === "scissors") {
            computerScore++;
            return ("You lose! Scissors beat Paper");
        } else {
            return ("You both chose Paper...");
        }
                
                
    } else {
        if (computerSelection === "paper") {
            playerScore++;
            return ("You win! Scissors beat Paper");
        } else if (computerSelection === "rock") {
            computerScore++;
            return ("You lose! Rock beats Scissors");
        } else {
            return ("You both chose Scissors...");   
        }  
    }   
};
