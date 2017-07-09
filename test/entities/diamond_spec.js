const expect = require('chai').expect;
const Diamond = require('../../src/entities/diamond');

describe('Diamond', () => {
  let diamond;

  beforeEach(() => {
    diamond = new Diamond();
  });

  it('#getChar', () => {
    expect(diamond.getChar()).to.be.equal('*');
  });

  it('#canWalkInto', () => {
    expect(diamond.canWalkInto()).to.be.true;
  });
});
