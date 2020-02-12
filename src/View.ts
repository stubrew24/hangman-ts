class View {
  private app: HTMLElement;
  private availableLetters: HTMLElement;
  private hits: HTMLElement;
  private misses: HTMLElement;
  private word: HTMLElement;

  constructor() {
    this.app = this.getElement("#root");

    this.availableLetters = this.createElement("div", "available");
    this.hits = this.createElement("div", "hits");
    this.misses = this.createElement("div", "misses");
    this.word = this.createElement("div", "word");

    this.app.append(this.availableLetters, this.hits, this.misses, this.word);
  }

  createElement(tag: string, className?: string) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  displayAvailable(letters) {
    this.clearElement(this.availableLetters);
    letters.forEach(letter => {
      const btn = this.createElement("button", "letter-btn");
      btn.textContent = letter;
      this.availableLetters.append(btn);
    });
  }

  displayHits(letters) {
    this.hits.innerHTML = "";
    letters.forEach(letter => {
      if (letter === null) {
        this.hits.innerHTML += " _ ";
      } else {
        this.hits.innerHTML += ` ${letter} `;
      }
    });
  }

  displayMisses(letters) {
    this.misses.innerHTML = "";
    letters.forEach(letter => {
      if (letter === null) {
        this.misses.innerHTML += " _ ";
      } else {
        this.misses.innerHTML += ` ${letter} `;
      }
    });
  }

  bindGuessLetter(handler) {
    this.availableLetters.addEventListener("click", event => {
      if ((<HTMLButtonElement>event.target).className === "letter-btn") {
        const letter = (<HTMLButtonElement>event.target).textContent;
        handler(letter);
      }
    });
  }

  displayWin() {
    console.log("winner");
  }

  displayGameOver() {
    console.log("Loser");
  }
}

export default View;
