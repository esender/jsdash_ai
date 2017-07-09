const Entity = require('./entity');

class Boulder extends Entity {
  getChar() {
    return 'O';
  }

  canWalkInto(direction) {
    if (direction === 1 || direction === 3) {
      return true;
    }

    return false;
  }
}

module.exports = Boulder;
