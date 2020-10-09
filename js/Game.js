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

  /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
  checkForWin() {
    let hiddenLetters = $(".hide");
    hiddenLetters.length === 0 ? true : false;
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {}
}
