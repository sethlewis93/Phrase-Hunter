/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const superSmashBroCharacters = [
  "Mario",
  "Luigi",
  "Peach",
  "Bowser",
  "Yoshi",
  "Rosalina & Luma",
  "Donkey Kong",
  "Diddy Kong",
  "Link",
  "Zelda",
  "Sheik",
  "Toon Link",
  "Samus",
  "Zero Suit Samus",
  "Pit",
  "Palutena",
  "Marth",
  "Ike",
  "Robin",
  "Kirby",
  "King Dedede",
  "Meta Knight",
  "Little Mac",
  "Fox",
  "Pikachu",
  "Pokemon Trainer",
  "Lucario",
  "Greninja",
  "Captain Falcon",
  "Villager",
  "Olimar",
  "Wii Fit Trainer",
  "Shulk",
  "Pac-Man",
  "Mega Man",
  "Sonic",
  "Mii Fighters",
  "Ness",
  "Falco",
  "Wario",
  "Lucina",
  "Dark Pit",
  "Dr. Mario",
  "R.O.B.",
  "Ganondorf",
  "Mr. Game & Watch",
  "Bowser Jr.",
  "Duck Hunt",
  "Jigglypuff",
  "Mewtwo",
  "Lucas",
  "Roy",
  "Ryu",
  "Cloud",
  "Corrin",
  "Bayonetta",
  "Snake",
  "Ice Climbers",
  "Inkling",
  "Daisy",
  "King K. Rool",
  "Dark Samus",
  "Young Link",
  "Simon",
  "Richter",
  "Joker",
  "Pikachu",
  "Wolf",
  "Isabelle",
  "Incineroar",
  "Piranha plant",
  "Ken",
  "Hero",
];

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases(superSmashBroCharacters);
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */

  createPhrases(characters) {
    const phrases = characters.map((character) => new Phrase(character));
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randPhrase];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    //Disable the selected letter’s onscreen keyboard button.
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.className = "chosen";
      this.activePhrase.showMatchedLetter();
      this.checkForWin();
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.className = "wrong";
      this.removeLife();
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed++;
    let lives = document.querySelector("#scoreboard > ol").children;
    for (let i = 0; i < this.missed; i++) {
      if (this.missed > 0) {
        lives[
          i
        ].innerHTML = `<img src='images/lostHeart.png' alt='Heart lost' width='30' height='35'>`;
      }
    }
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
  checkForWin() {
    let hiddenLetters = document.getElementsByClassName("hide");
    if (hiddenLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    let gameOverMessage = document.getElementById("game-over-message");
    if (gameWon) {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").className = "win";
      gameOverMessage.style.display = "block";
      gameOverMessage.textContent = `You guessed correctly - way to go!`;
    } else {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").className = "lose";
      gameOverMessage.style.display = "block";
      gameOverMessage.textContent = `Bummer! You did not guess correctly. Try again!`;
    }

    // Resetting the game

    document.querySelector("#phrase > ul").textContent = "";

    const keys = document.querySelectorAll("#qwerty div button");
    for (let key of keys) {
      key.className = "key";
      key.disabled = false;
    }

    const lives = document.querySelector("#scoreboard > ol").children;
    for (let life of lives) {
      life.innerHTML = `<img src='images/liveHeart.png' alt='Heart' width='30' height='35'>`;
      this.missed = 0;
    }
  }
}
