const expect = require('chai').expect;
const Point = require('../src/point');

describe('Point', () => {
  it('should return object with coordinates', () => {
    const point = new Point(2, 5);

    expect(point.x).to.be.equal(2);
    expect(point.y).to.be.equal(5);
  });
});
