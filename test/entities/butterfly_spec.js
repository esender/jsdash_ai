const expect = require('chai').expect;
const Butterfly = require('../../src/entities/butterfly');

describe('Butterfly', () => {
  let butterfly;

  beforeEach(() => {
    butterfly = new Butterfly();
  });

  it('#getChar', () => {
    expect(butterfly.getChar()).to.be.equal('/|\\-');
  });
});
