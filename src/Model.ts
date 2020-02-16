import alphabet from "./alphabet";
import words from "./words";

class Model {
  private word: string[];
  private hits: string[];
  private misses: string[];
  private available: string[];

  constructor() {
    this.available = [...alphabet];

    this.getWord();

    this.word = this.randomWord();
    this.hits = this.word.map(letter => null);
    this.misses = [];
  }

  randomWord() {
    const word =
      words[Math.floor(Math.random() * Math.floor(words.length - 1))];
    return word.toUpperCase().split("");
  }

  async getWord() {
    const res = await fetch(
      "https://wordsapiv1.p.rapidapi.com/words/?random=true",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "895c54ea64msh6c37d0108d1ee19p11a0e7jsn7d9c264f6ff6"
        }
      }
    );
    const data = await res.json();
    console.log(data.word);
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
