const Triangle = require('../lib/Triangle');

describe('Triangle', () => {
    describe('shape', ()=>{
  it('should generate code for a yellow triangle with black lettering logo when given appropriate data', () => {
    const correct = `<polygon points="100,10 150,125 50,125" fill = "yellow"/><text x="100" y="105" font-size="32" text-anchor="middle" fill="black">tst</text></svg>`;
    const triangle = new Triangle('tst', 'Triangle', 'black', 'yellow');
  expect(triangle.shape()).toEqual(correct)
});
});
});
