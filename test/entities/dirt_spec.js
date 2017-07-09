const expect = require('chai').expect;
const Dirt = require('../../src/entities/dirt');

describe('Dirt', () => {
  let dirt;

  beforeEach(() => {
    dirt = new Dirt();
  });

  it('#getChar', () => {
    expect(dirt.getChar()).to.be.equal(':');
  });

  it('#canWalkInto', () => {
    expect(dirt.canWalkInto()).to.be.true;
  });
});
