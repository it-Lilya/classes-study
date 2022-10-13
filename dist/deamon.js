Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line no-void
exports.Deamon = void 0;
// eslint-disable-next-line no-underscore-dangle
const _app = require('./app');

class Deamon extends _app.Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
exports.Deamon = Deamon;
