/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
  document.getElementById("qwerty").addEventListener("click", (e) => {
    const clicked = e.target;
    game.activePhrase.showMatchedLetter(clicked.textContent);
    game.handleInteraction(clicked);
  });
});

