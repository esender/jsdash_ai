const Entity = require('./entity');

class Diamond extends Entity {
  getChar() {
    return '*';
  }

  canWalkInto(direction) {
    return true;
  }
}

module.exports = Diamond;
