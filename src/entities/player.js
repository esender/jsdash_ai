const Entity = require('./entity');

class Player extends Entity {
  getChar() {
    return 'AX';
  }
}

module.exports = Player;
