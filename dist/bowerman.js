"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bowerman = void 0;
var _app = require("./app");
class Bowerman extends _app.Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
exports.Bowerman = Bowerman;