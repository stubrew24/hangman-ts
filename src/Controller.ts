class Controller {
  private model;
  private view;

  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindGuessLetter(this.handleGuessLetter);
    this.render();
  }

  handleGuessLetter = letter => {
    this.model.guessLetter(letter);
    this.render();
  };

  checkGameWon = () => {
    const word = this.model.word.join("");
    const hits = this.model.hits.join("");
    if (word === hits) return true;
  };

  checkGameOver = () => {
    if (this.model.misses.length >= 8) return true;
  };

  render() {
    this.view.displayHits(this.model.hits);
    if (this.checkGameWon()) return this.view.displayWin();
    this.view.displayMisses(this.model.misses);
    if (this.checkGameOver()) return this.view.displayGameOver();
    this.view.displayAvailable(this.model.available);
  }
}

export default Controller;
