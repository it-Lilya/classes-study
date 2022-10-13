Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line no-void
exports.default = void 0;
class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
// eslint-disable-next-line no-console
exports.default = Character;
