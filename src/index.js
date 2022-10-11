// eslint-disable-next-line max-classes-per-file
class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

// eslint-disable-next-line no-unused-vars
export class Bowerman extends Character {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}

// eslint-disable-next-line no-unused-vars, no-undef
export class Swordsman extends Character {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

// eslint-disable-next-line no-unused-vars, no-undef
export class Magician extends Character {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

// eslint-disable-next-line no-unused-vars
export class Deamon extends Character {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Deamon';
    this.attack = 10;
    this.defence = 40;
  }
}

// eslint-disable-next-line no-unused-vars, no-undef
export class Undead extends Character {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

// eslint-disable-next-line no-unused-vars, no-undef
export class Zombie extends Character {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars
  constructor(name, type, health, level, attack, defence) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
