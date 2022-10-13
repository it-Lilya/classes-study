Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line no-void
exports.Zombie = void 0;
// eslint-disable-next-line no-underscore-dangle
const _app = require('./app');

class Zombie extends _app.Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
exports.Zombie = Zombie;
