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

            // Game over
            if (moves === 10) {
                gameOver(playerOptions, movesLeft);
            }
        })
    })
}

const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");
    const img = document.querySelectorAll("img");

    playerOptions.forEach(option => {
        option.style.display = "none"
    })
    chooseMove.innerText = "GAME OVER";
    movesLeft.style.display = "none";

    if(playerScore > computerScore) {
        result.style.fontSize = "2rem";
        result.innerText = "You're the winner of the game. 😆"
    } else if (playerScore < computerScore){
        result.style.fontSize = "2rem";
        result.innerText = "You lost the game. 😭"
    } else {
        result.style.fontSize = "2rem";
        result.innerText = "The game ended in a tie. 😏"
        result.style.color = "#323549";
    }

    img.forEach(i => i.style.display ="none");
    reloadBtn.innerText = "RESTART";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
        window.location.reload();
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