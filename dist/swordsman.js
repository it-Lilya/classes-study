"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swordsman = void 0;
var _app = require("./app");
class Swordsman extends _app.Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
exports.Swordsman = Swordsman;