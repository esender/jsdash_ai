const Entity = require('./entity');

class Dirt extends Entity {
  getChar() {
    return ':';
  }

  canWalkInto(direction) {
    return true;
  }
}

module.exports = Dirt;
