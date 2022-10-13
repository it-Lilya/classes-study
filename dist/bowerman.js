const _index = _interopRequireDefault(require('./index'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Bowerman extends _index.default {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
const boo = new Bowerman('Boo', 'ty');
