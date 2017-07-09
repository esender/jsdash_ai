const expect = require('chai').expect;
const Player = require('../../src/entities/player');

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  it('#getChar', () => {
    expect(player.getChar()).to.be.equal('AX');
  });
});
