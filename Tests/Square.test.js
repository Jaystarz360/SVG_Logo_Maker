const Square = require('../lib/Square');

describe('Square', () => {
    describe('shape', ()=>{
  it('should generate code for a purple square with orange lettering logo when given appropriate data', () => {
    const correct = `<rect width="150" height="150" x='10' y='10' fill='purple'/> <text x="85" y="100" font-size="70" text-anchor="middle" fill="orange">tst</text></svg>`;
    const square = new Square('tst', 'square', 'orange', 'purple');
  expect(square.shape()).toEqual(correct)
});
});
});
