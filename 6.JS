function playGame(playerChoice) {
    let choices = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    console.log("Твой выбор: " + playerChoice);
    console.log("Выбор компьютера: " + computerChoice);

    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        return "Неправильный выбор";
    }

    if (playerChoice === computerChoice) {
        return "Ничья";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Ты выиграл";
    }
    else {
        return "Ты проиграл";
    }
}

console.log(playGame("rock"));
console.log(playGame("paper"));
console.log(playGame("scissors"));