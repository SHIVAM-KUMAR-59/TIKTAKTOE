let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetButton");
let turn1 = true; // player one if false then player 2
let newGameButton = document.querySelector("#newButton");
let msgContainer = document.querySelector(".hide");
let heading = document.querySelector("#heading");
let msg = document.querySelector("#message");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const hideHeading = (Winner) => {
    heading.classList.add("hide");
};
const showWinner = (Winner) => {
    msg.innerText = `CONGRATULATIONS `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const resetGame = () => {
    turn1 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner();
                hideHeading();
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn1) { // player 1
            box.innerText = "O";
            turn1 = false;
        } else { // player 2
            box.innerText = "X";
            turn1 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
newGameButton.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);