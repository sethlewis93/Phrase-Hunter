/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */

  createPhrases() {
    const phrases = [
      new Phrase("Mario"),
      new Phrase("Kirby"),
      new Phrase("Little mac"),
      new Phrase("Ganondorf"),
      new Phrase("Zelda"),
      new Phrase("Isabele"),
      new Phrase("Snake"),
      new Phrase("Pac man"),
      new Phrase("Ryu"),
      new Phrase("Bowser"),
      new Phrase("Donkey kong"),
    ];
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
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    let gameOverMessage = document.getElementById("game-over-message");
    if (gameWon) {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").className = "win";
      gameOverMessage.style.display = "block";
      gameOverMessage.textContent = `Way to go! You won the game!`;
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
