Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const _index = _interopRequireDefault(require('./index'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Undead extends _index.default {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
exports.default = Undead;
