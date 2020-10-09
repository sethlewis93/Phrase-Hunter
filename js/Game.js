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
        const phrases = [   new Phrase('Uno'), 
                            new Phrase('Dos'), 
                            new Phrase('Tres'), 
                            new Phrase('Quatro'),
                            new Phrase('Cinco')];
        return phrases;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randPhrase];
        
    };

 }

