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
    this.phrase.includes(letter) ? true : false;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(guess) {
    if (this.checkLetter) {
      // $ syntax inspired by https://www.thoughtco.com/and-in-javascript-2037515
      let matchingLetter = document.querySelectorAll("letter");
      for (let i = 0; i < matchingLetter.length; i++) {
        if (matchingLetter[i].innerHTML === guess) {
          matchingLetter.classList.remove("hide");
          matchingLetter.classList.add("show");
          console.log("method works");
        }
      }
    }
  }
}
