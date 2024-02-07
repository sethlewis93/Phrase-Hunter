# Phrase Hunter - Super Smash Bros Edition

## About

Browser-based version of the game 'Phrase Hunter' (or 'Word Hunter') whereby the user guesses the phrase that is hidden on the screen based on the game theme and the number of hidden characters presented. Created with HTML, CSS, ES6.

### Phrase.js

The Phrase.js file handles displaying the letter placeholders, checks to see if a selected letter matches a letter in the phrase, and reveals letters on the board matching the player's selection. This is achieved within the addPhrasetoDisplay(), checkLetter(), and showMatchLetter(), respectively.

### Game.js

The Game.js file - specifically handleInteraction() - is where the majority of the game logic is found. Starting the game, retrieving a randomly selected phrase, removing player changes (called "lives"), and logic that checks whether or not a user won and whether or not the game is over are handled in this file.

### app.js

App.js contains the event listeners required for the game. Listeners are placed on the beginning buttons and the app's keyboard keys, respectively. App.js is where the Game object is instantiated and the startGame() is called.

## GAME INSTRUCTIONS

1. Download code and open index.html in your preferred browser.
2. Select "Start Game"
3. Based on the legnth of the blank character fields, choose a letter to begin the guessing game.
   - Note: You have 5 "lives" each round. Each time you guess incorrectly, you lose a life.
4. If you guess correctly, you'll be greeting with an enthusastic "success" message. If you lose all your lives before guessing the character, you will be greeted with a "try again" message. Either way, you can play again as many times as you like.
