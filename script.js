let playerScore = 0;
let computerScore = 0;
let moves = 0;
const totlaCount = 10;

const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".papaer");
    const sissorBtn = document.querySelector(".sissor");

    const playerOptions = [rockBtn, sissorBtn, paperBtn];
    const computerOptions = ["rock", "paper", "sissors"];

    playerOptions.forEach(option => {
        option.addEventListener("click", () => {
            const movesLeft = document.querySelector(".movesleft");
            moves++;
            movesLeft.innerHTML = `Remaining Attempts: ${totlaCount - moves}`;

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];

            // Check who wins
            winner(option.innerText, computerChoice)
        })
    })
}

const winner = (player, computer) => {

}

playGame();