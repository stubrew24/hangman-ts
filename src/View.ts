class View {
  private app: HTMLElement;
  private keyboard: HTMLElement;
  private hits: HTMLElement;
  private misses: HTMLElement;
  private word: HTMLElement;
  private statusBar: HTMLElement;
  private gameOverModal: HTMLElement;

  constructor() {
    this.app = this.getElement("#root");

    this.keyboard = this.createElement("div", "keyboard");
    this.hits = this.createElement("div", "hits");
    this.misses = this.createElement("div", "misses");
    this.word = this.createElement("div", "word");
    this.statusBar = this.createElement("div", "status-bar");
    this.gameOverModal = this.createElement("div", "game-over");

    this.app.append(this.statusBar, this.hits, this.misses, this.keyboard);
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

  displayAvailable(letters, hits, misses) {
    this.clearElement(this.keyboard);
    letters.forEach(letter => {
      const btn = this.createElement("button", "letter-btn");
      btn.textContent = letter || ".";
      if (hits.includes(letter) || misses.includes(letter)) {
        (<HTMLButtonElement>btn).disabled = true;
      }
      this.keyboard.append(btn);
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
    this.keyboard.addEventListener("click", event => {
      if ((<HTMLButtonElement>event.target).className === "letter-btn") {
        const letter = (<HTMLButtonElement>event.target).textContent;
        handler(letter);
      }
    });
  }

  displayWin(handler) {
    alert("you win!");
    handler();
  }

  displayGameOver(word, handler) {
    const gameOverText = this.createElement("div", "game-over-text");
    gameOverText.innerHTML = `Gameover! <br />The word was ${word}`;
    const newGameButton = this.createElement("button", "new-game-btn");
    newGameButton.textContent = "PLAY AGAIN";
    newGameButton.addEventListener("click", () => {
      this.gameOverModal.remove();
      handler();
    });
    gameOverText.append(newGameButton);
    this.gameOverModal.append(gameOverText);
    this.app.append(this.gameOverModal);
  }
}

export default View;
