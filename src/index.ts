import Controller from "./Controller";
import Model from "./Model";
import View from "./View";
const { RAPID_API_KEY } = process.env;

console.log("API_KEY:", RAPID_API_KEY);
const app = new Controller(new Model(), new View());
