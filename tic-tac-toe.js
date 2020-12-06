// Restart game button
const restartGame = document.querySelector("#button");

// Grab all the squares
const allSquares = document.querySelectorAll("td");

// Clear all the squares
function clearBoard() {
  for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].textContent = "";
  }
}

restartGame.addEventListener("click", clearBoard);

// Check for square changes
function squareChange() {
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

// For loop to add event listeners to all the squares
for (var i = 0; i < allSquares.length; i++) {
  allSquares[i].addEventListener("click", squareChange);
}