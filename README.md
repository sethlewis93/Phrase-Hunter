# FSJS Techdegree Project 4
 Use OOP to create Phrase Hunter 


## About
Team Treehouse FSJS Project 4 demonstrates writing Javascript code utilizing Object-Oriented Programming (OOP) techniques. Project 4 is a browser-based version of the game 'Phrase Hunter' whereby the user guesses the phrase that is hidden on the screen.

### Phrase.js
The Phrase.js file handles displaying the letter placeholders, checks to see if a selected letter matches a letter in the phrase, and reveals letters on the board matching the player's selection. This is achieved within the addPhrasetoDisplay, checkLetter, and showMatchLetter methods, respectively.

### Game.js
The Game.js file - specifically the handleInteraction method - is where the majority of the game logic is found. Starting the game, retrieving a randomly selected phrase, removing player changes (called "lives"), and logic that checks whether or not a user won and whether or not the game is over are handled in this file.  

### app.js
App.js contains the event listeners required for the game. Listeners are placed on the beginning buttons and the app's keyboard keys, respectively. App.js is where the Game object is instantiated and the startGame method is called. 

