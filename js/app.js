let game;

// Clicking 'Start' button begins new game
document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

// Target the keys of the keyboard & invalidate clicks inside whitespace
document.getElementById("qwerty").addEventListener("click", (e) => {
  if (e.target.className === "key") {
    game.activePhrase.showMatchedLetter(e.target.textContent);
    game.handleInteraction(e.target);
  } else {
    e.preventDefault();
  }
});
