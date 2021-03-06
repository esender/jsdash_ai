const Player = require('./entities/player');

class World {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.player = null;
    this.cells = new Array(h);

    for (let y = 0; y < h; y++) {
      this.cells[y] = new Array(w);
    }
  }

  set(point, entity) {
    this.cells[point.y][point.x] = entity;
  }

  get(point) {
    return this.cells[point.y][point.x];
  }

  setPlayer(point) {
    const player = new Player();
    player.place(point);

    this.player = player;
  }
}

module.exports = World;
