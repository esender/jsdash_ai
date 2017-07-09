class Entity {
  constructor() {
    this.point = null;
  }

  getChar() {}

  canWalkInto(direction) {
    return false;
  }

  place(point) {
    this.point = point;
  }
}

module.exports = Entity;
