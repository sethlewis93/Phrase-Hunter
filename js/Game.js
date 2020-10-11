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
      new Phrase("Stevie W"),
      new Phrase("Jimi H"),
      new Phrase("Sam C"),
      new Phrase("Kendrick L"),
      new Phrase("Ahmad J"),
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

  handleInteraction() {}

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
    this.missed += 1;
    let lives = document.querySelector('#scoreboard > ol').children;
    for(let i = 0; i < this.missed; i++) {
      if (this.missed > 0) {
        lives[i].innerHTML = `<img src='images/lostHeart.png' alt='Heart lost' width='30' height='35'>`
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

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    /* Uncaught TypeError: can't assign to property "innerHTML" on "block": not an object */
    let gameOverMessage = (document.getElementById(
      "game-over-message"
    ));
    if (gameWon) {
      gameOverMessage.style.display = 'block'
      gameOverMessage.textContent = `<h2 Way to go! You won the game!</h2>`;
      document.getElementById("overlay").className = "Won";
    } else {
      gameOverMessage.style.display = 'block'
      gameOverMessage.textContent = `<h2 Bummer! You did not guess correctly</h2>`;
      document.getElementById("overlay").className = "Lost";
    }
  }
}
