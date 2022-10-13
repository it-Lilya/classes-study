"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Undead = void 0;
var _app = require("./app");
class Undead extends _app.Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
exports.Undead = Undead;