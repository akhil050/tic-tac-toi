let btns = document.querySelectorAll(".btn");
let player = "X"
let array = Array.from(btns);
btns.forEach(function (button) {
    button.addEventListener("click", myfunction)
})
function myfunction(){
    if(this.innerHTML === ""){
        this.innerHTML = player
        if(player === "X"){
            player = "O"
        }else{
            player = "X"
        }
    }
    winner();
}

function winner() {
    // Winning combinations (0-based index for a 3x3 grid)
    const winCombos = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left
        [2, 4, 6]  // Diagonal from top-right
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (array[a].innerHTML !== "" &&
            array[a].innerHTML === array[b].innerHTML &&
            array[a].innerHTML === array[c].innerHTML) {
            alert(`${array[a].innerHTML} is the winner!`);
            resetGame();
            return;
        }
    }

    // Check for a draw (if all buttons are filled and there's no winner)
    if (array.every(button => button.innerHTML !== "")) {
        alert("It's a draw!");
        resetGame();
    }
}

function resetGame() {
    array.forEach(button => {
        button.innerHTML = ""; // Clear all buttons
    });
    player = "X"; // Reset starting player
}

