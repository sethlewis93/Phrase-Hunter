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

const game = new Game();
const randomPhrase = game.getRandomPhrase();
console.log(randomPhrase);
const phrase = new Phrase(randomPhrase.phrase);
// type error occurs here
phrase.addPhraseToDisplay();