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
    // console.log("word:", this.word);
    if (this.word.includes(letter)) {
      this.word.map((el, idx) => {
        if (el === letter) {
          this.hits[idx] = letter;
        }
      });
      console.log(this.hits);
    } else {
      this.misses.push(letter);
      console.log("misses:", this.misses);
    }
    this.available = this.available.filter(el => el !== letter);
    return;
  }
}

export default Model;
