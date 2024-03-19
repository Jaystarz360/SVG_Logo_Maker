class Square {
    constructor(chars, logoShape, textColor, bgColor){
    this.chars = chars;
    this.logoShape = logoShape;
    this.textColor = textColor;
    this.bgColor = bgColor
   }
   shape() {
        return `<rect width="150" height="150" x='10' y='10' fill='${this.bgColor}'/> <text x="85" y="100" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.chars}</text></svg>`;
}};
module.exports = Square;