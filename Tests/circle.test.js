const Circle = require('../lib/Circle');

describe('Circle', () => {
    describe('shape', ()=>{
  it('should generate code for a red circle with white lettering logo when given appropriate data', () => {
    const correct = `<circle cx="150" cy="100" r="80" fill='red'/><text x="150" y="115" font-size="60" text-anchor="middle" fill="white">tst</text></svg>`;
    const circle = new Circle('tst', 'circle', 'white', 'red');
  expect(circle.shape()).toEqual(correct)
});
});
});
