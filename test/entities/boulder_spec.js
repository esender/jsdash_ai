const expect = require('chai').expect;
const Boulder = require('../../src/entities/boulder');

describe('Boulder', () => {
  let boulder;

  beforeEach(() => {
    boulder = new Boulder();
  });

  it('#getChar', () => {
    expect(boulder.getChar()).to.be.equal('O');
  });

  it('#canWalkInto', () => {
    expect(boulder.canWalkInto(0)).to.be.false;
    expect(boulder.canWalkInto(1)).to.be.true;
  });
});
