/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.parsedPhrase = this.phrase.split("");
  }

  addPhraseToDisplay() {
    const phraseDiv = document.getElementById("phrase");
    for (let character of this.parsedPhrase) {
      character !== " "
        ? (phraseDiv.innerHTML += `<li class = 'hide letter ${character}'>${character}</li>`)
        : (phraseDiv.innerHTML += `<li class = 'space'></li>`);
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(guess) {
    let matchingLetter = document.getElementsByClassName("letter");
    for (let i = 0; i < matchingLetter.length; i++) {
      // if there are two of the same letter, the second one does not "show"
      if (matchingLetter[i].textContent == guess) {
        matchingLetter[i].classList.remove("hide");
        matchingLetter[i].classList.add("show");
        return true;
      }
    }
  }
}
