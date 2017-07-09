const Entity = require('./entity');

class Butterfly extends Entity {
  getChar() {
    return '/|\\-';
  }
}

module.exports = Butterfly;
