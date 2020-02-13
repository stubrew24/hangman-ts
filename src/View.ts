import graphics from "./graphics";

class View {
  private app: HTMLElement;
  private keyboard: HTMLElement;
  private hits: HTMLElement;
  private misses: HTMLElement;
  private statusBar: HTMLElement;
  private gameEndModal: HTMLElement;
  private showGraphic: HTMLElement;

  constructor() {
    this.app = this.getElement("#root");

    this.keyboard = this.createElement("div", "keyboard");
    this.hits = this.createElement("div", "hits");
    this.misses = this.createElement("div", "misses");
    this.statusBar = this.createElement("div", "status-bar");
    this.statusBar.textContent = "HANGMAN";
    this.gameEndModal = this.createElement("div", "game-end");
    this.showGraphic = this.createElement("pre", "graphic");
    this.app.append(
      this.statusBar,
      this.hits,
      this.showGraphic,
      this.misses,
      this.keyboard
    );
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
      this.misses.innerHTML += ` <span class="strikediag">${letter}</span> `;
    });
    this.showGraphic.innerHTML = `<img src="./images/img${letters.length}.png"/>`;
  }

  bindGuessLetter(handler) {
    this.keyboard.addEventListener("click", event => {
      if ((<HTMLButtonElement>event.target).className === "letter-btn") {
        const letter = (<HTMLButtonElement>event.target).textContent;
        handler(letter);
      }
    });
  }

  gameEnd(handler, outcome, word?) {
    console.log(word);
    const gameEndText = this.createElement("div", "game-end-text");
    gameEndText.innerHTML =
      outcome === "win" ? "You win!" : `Gameover! <br />The word was ${word}`;
    const newGameButton = this.createElement("button", "new-game-btn");
    newGameButton.textContent = "PLAY AGAIN";
    newGameButton.addEventListener("click", () => {
      this.gameEndModal.remove();
      handler();
    });
    gameEndText.append(newGameButton);
    this.gameEndModal.append(gameEndText);
    this.app.append(this.gameEndModal);
  }
}

export default View;
