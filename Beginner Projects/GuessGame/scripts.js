let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector('.wrng');
let guess = document.getElementById('guess');



let ans = Math.floor(Math.random() * 10) + 1;
console.log(ans);
let numGuess = 0;

btn.addEventListener("click", () => {
    guessNumber();
})

function guessNumber() {
    if (input.value < 1 || input.value > 10 || isNaN(input.value)) {
        wrng.innerHTML = "Enter A  <span class='w'>DIGIT </span> or  A<span class='w'> VALID </span>Number (1-10)";
        setTimeout(() => {
            wrng.innerHTML = "";
        }, 3000);
    } else {
        numGuess++;
        guess.innerText = numGuess;
        if (input.value > ans) {
            wrng.innerHTML = "Number guessed was<span class='sw'> HIGH!</span>";
            setTimeout(() => {
                wrng.innerHTML = "";
            }, 2000);
        } else if (input.value < ans) {
            wrng.innerHTML = "Number guessed was<span class='sw'> LOW!</span>";
            setTimeout(() => {
                wrng.innerHTML = "";
            }, 2000);
        } else {
            wrng.innerHTML = "<span class='s'>CONGRATULATIONS!.</span> [Number guessed in " + numGuess + " guesses]";
            btn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
};


function resetGame() {
    numGuess = 0;
    ans = Math.floor(Math.random() * 100) + 1;
    setTimeout(() => {
        input.value = "";
    }, 500);
    btn.disabled = false;
    guess.innerText = 0;
}