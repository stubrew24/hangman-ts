import Model from "./Model";

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
    if (this.model.misses.length >= 6) return true;
  };

  render() {
    const { view, model, reset } = this;
    const { hits, misses, available } = model;
    view.displayHits(hits);
    if (this.checkGameWon()) return view.gameEnd(reset, "win");
    view.displayMisses(misses);
    if (this.checkGameOver())
      return view.gameEnd(reset, "lose", model.word.join(""));
    view.displayAvailable(available, hits, misses);
  }

  reset = () => {
    this.model = new Model();
    this.render();
  };
}

export default Controller;
