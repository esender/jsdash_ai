const expect = require('chai').expect;
const Point = require('../src/point');
const World = require('../src/world');
const Player = require('../src/entities/player');

describe('World', () => {
  it('should return object', () => {
    const world = new World(40, 22);

    expect(world.width).to.be.equal(40);
    expect(world.height).to.be.equal(22);
    expect(world.cells.length).to.be.equal(22);
    expect(world.cells[0].length).to.be.equal(40);
    expect(world.player).to.be.null;
  });

  describe('#set', () => {
    let world, point, fakeEntity;

    beforeEach(() => {
      world = new World(40, 22);
      point = new Point(1, 2);
      fakeEntity = {};

      world.set(point, fakeEntity);
    });

    it('add entity to cells', () => {
      expect(world.cells[2][1]).to.equal(fakeEntity);
    });
  });

  describe('#get', () => {
    let world, point, fakeEntity;

    beforeEach(() => {
      world = new World(40, 22);
      point = new Point(1, 2);
      fakeEntity = {};

      world.set(point, fakeEntity);
    });

    it('returns entity', () => {
      expect(world.get(point)).to.equal(fakeEntity);
    });
  });

  describe('#setPlayer', () => {
    let world, point;

    beforeEach(() => {
      world = new World(40, 22);
      point = new Point(1, 2);

      world.setPlayer(point);
    });

    it('add player to world', () => {
      expect(world.player).to.be.instanceof(Player);
    });

    it('player has point', () => {
      expect(world.player.point).to.be.equal(point);
    });
  });
});
