/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase('Good news');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//     });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// // const randomPhrase = game.getRandomPhrase();
// // const phrase = new Phrase(randomPhrase.phrase);
// // phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();

let game;

document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
  let phrase = new Phrase(game.activePhrase.phrase);
  document.getElementById("qwerty").addEventListener("click", (e) => {
    const clicked = e.target;
    phrase.showMatchedLetter(clicked.textContent);
  });
});
