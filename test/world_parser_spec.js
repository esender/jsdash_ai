const expect = require('chai').expect;
const WorldParser = require('../src/world_parser');

describe('WorldParser', () => {
  it('should return parsed from screen World', () => {
    const parser = new WorldParser(screen);

    expect(parser.parse()).to.be.a('World');
  });
});
