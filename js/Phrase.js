/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


 class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
        this.parsedPhrase = this.phrase.split('');
    }

    addPhraseToDisplay() {
        console.log('hi');
        const phraseDiv = document.getElementById('phrase');
        // create new li elements equaling phrase characters and append to dom
        for(let character of this.parsedPhrase) {
            character !== ' ' 
                ? phraseDiv.innerHTML += `<li class = 'hide letter${character}'>${character}</li>`
                : phraseDiv.innerHTML += `<li class = 'space'></li>`
        }
        // document.createElement('li').appendChild(phraseDiv);
        // classList of li elements = `hide letter ${character[i]}`
        // textcontent of li elements = `${character[i]}`
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }





 }