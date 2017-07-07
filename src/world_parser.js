const Point = require('./point');

class WorldParser {
  constructor(world) {
    this.world = world;
  }

  parse(screen) {
    screen.forEach((row, y) => {
      row.forEach((cell, x) => {
        const point = new Point(x, y);

        this.set(point, cell);
      });
    });

    return this.world;
  }

  set(point, cell) {
    if ( cell == 'A' ) {
      this.world.setPlayer(point);
    } else {
      this.world.set(point, cell);
    }
  }
}

module.exports = WorldParser;
