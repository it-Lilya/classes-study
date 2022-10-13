"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Magician = void 0;
var _app = require("./app");
class Magician extends _app.Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
exports.Magician = Magician;