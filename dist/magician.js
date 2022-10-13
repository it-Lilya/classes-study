Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const _index = _interopRequireDefault(require('./index'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Magician extends _index.default {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
exports.default = Magician;
