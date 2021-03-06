import alphabet from "./alphabet";
import words from "./words";

class Model {
  private word: string[];
  private hits: string[];
  private misses: string[];
  private available: string[];

  constructor() {
    this.available = [...alphabet];

    this.word = this.randomWord();
    this.hits = this.word.map(letter => null);
    this.misses = [];
  }

  randomWord() {
    const word =
      words[Math.floor(Math.random() * Math.floor(words.length - 1))];
    return word.toUpperCase().split("");
  }

  guessLetter(letter) {
    if (!this.available.includes(letter)) return null;
    if (this.word.includes(letter)) {
      this.word.map((el, idx) => {
        if (el === letter) {
          this.hits[idx] = letter;
        }
      });
    } else {
      this.misses.push(letter);
    }
    return;
  }
}

export default Model;
