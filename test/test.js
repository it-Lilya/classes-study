// eslint-disable-next-line no-unused-vars, import/extensions
import * as src from '../src/index';

test('name in object', () => {
  const boowerman1 = new src.Bowerman('Bo');
  if (boowerman1.name.length < 2 && boowerman1.name.length > 10) {
    expect(() => boowerman1.name()).toThrowError('Name character must be > 2 and < 10 symbol');
  }
});
