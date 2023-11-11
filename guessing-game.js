const luckyNumber = 65;
let chances = 10;

while (chances > 0) {
    let guess = submitGuess();

    let result = checkGuess(guess);

    if (result == "correct") {
        alert("You win");
        break;
    }
    else if (result == "high") {
        alert("Too high");
    }
    else {
        alert("Too low");
    }

    chances = chances - 1;

    if (chances == 0) {
        alert("Sorry, you've run out of chances.")
    }
}

function checkGuess(guess) {
    if (guess == luckyNumber) {
        return "correct";
    } else if (guess > luckyNumber) {
        return "high";
    } else {
        return "low";
    }
}

function submitGuess() {
    let guess = prompt(`Make a guess (between 1 and 100). Chances left: ${chances}`);

    while (!isNumber(guess)) {
        guess = prompt("Your guess must be a number!! Please enter a number between 1 and 100");
    }

    return guess;
}

function isNumber(guess) {
    return !isNaN(guess);
}