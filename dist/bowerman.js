Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line no-void
exports.Bowerman = void 0;
// eslint-disable-next-line no-underscore-dangle
const _app = require('./app');

class Bowerman extends _app.Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
exports.Bowerman = Bowerman;
