Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line no-void
exports.default = void 0;
// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _index = _interopRequireDefault(require('./index'));

// eslint-disable-next-line no-underscore-dangle
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Deamon extends _index.default {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
exports.default = Deamon;
