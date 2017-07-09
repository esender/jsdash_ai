const Entity = require('./entity');

class Brick extends Entity {
  getChar() {
    return '+';
  }
}

module.exports = Brick;
