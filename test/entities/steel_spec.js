const expect = require('chai').expect;
const Steel = require('../../src/entities/steel');

describe('Steel', () => {
  let steel;

  beforeEach(() => {
    steel = new Steel();
  });

  it('#getChar', () => {
    expect(steel.getChar()).to.be.equal('#');
  });
});
