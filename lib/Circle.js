class Circle {
    constructor(chars, logoShape, textColor, bgColor){
    this.chars = chars;
    this.logoShape = logoShape;
    this.textColor = textColor;
    this.bgColor = bgColor
   }
   shape() {
        return `<circle cx="150" cy="100" r="80" fill='${this.bgColor}'/><text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.chars}</text></svg>`;
}}
module.exports = Circle;