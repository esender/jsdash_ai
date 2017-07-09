const expect = require('chai').expect;
const Brick = require('../../src/entities/brick');

describe('Brick', () => {
  let brick;

  beforeEach(() => {
    brick = new Brick();
  });

  it('#getChar', () => {
    expect(brick.getChar()).to.be.equal('+');
  });
});
