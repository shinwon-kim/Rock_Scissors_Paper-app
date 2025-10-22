let playerScore = 0;
let computerScore = 0;
let moves = 0;
const totalCount = 10;

const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissors");

    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

    playerOptions.forEach(option => {
        option.addEventListener("click", () => {
            const movesLeft = document.querySelector(".movesleft");
            moves++;
            movesLeft.innerHTML = `Remaining Attempts: ${totalCount - moves}`;

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
            
            // Check who wins
            winner(option.innerText, computerChoice)
        })
    })
}

const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    console.log(player, computer);
    if(player === computer){
        result.textContent = "DRAW";
    } else if (player === "ROCK") {
        if (computer === "PAPER") {
            result.textContent = "COMPUTER WINS";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = "PLAYER WINS";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    } else if (player === "SCISSORS") {
        if (computer === "ROCK") {
            result.textContent = "COMPUTER WINS";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = "PLAYER WINS";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    } else if (player === "PAPER") {
        if (computer === "SCISSORS"){
            result.textContent = "COMPUTER WINS";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = "PLAYER WINS";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}

playGame();