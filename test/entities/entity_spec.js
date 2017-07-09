const expect = require('chai').expect;
const Entity = require('../../src/entities/entity');

describe('Entity', () => {
  let entity;

  beforeEach(() => {
    entity = new Entity();
  });

  it('should return object with null point', () => {
    expect(entity.point).to.be.null;
  });

  it('#getChar', () => {
    expect(entity.getChar()).to.be.undefined;
  });

  it('#canWalkInto', () => {
    expect(entity.canWalkInto()).to.be.false;
  });

  it('#place', () => {
    const fakePoint = {};
    entity.place(fakePoint)

    expect(entity.point).to.be.equal(fakePoint);
  });
});
