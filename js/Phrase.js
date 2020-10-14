/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.parsedPhrase = this.phrase.split("");
  }

  addPhraseToDisplay() {
    const phraseList = document.getElementById("phrase").firstElementChild;
    for (let character of this.parsedPhrase) {
      character !== " "
        ? (phraseList.innerHTML += `<li class = 'hide letter ${character}'>${character}</li>`)
        : (phraseList.innerHTML += `<li class = 'space'></li>`);
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */

  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    let matchingLetter = document.getElementsByClassName(letter);
    for (let i = 0; i < matchingLetter.length; i++) {
      matchingLetter[i].classList.remove("hide");
      matchingLetter[i].classList.add("show");
    }
  }
}
