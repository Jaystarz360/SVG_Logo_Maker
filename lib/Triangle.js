class Triangle {
    constructor(chars, logoShape, textColor, bgColor){
    this.chars = chars;
    this.logoShape = logoShape;
    this.textColor = textColor;
    this.bgColor = bgColor
   }
   shape() {
        return `<polygon points="100,10 150,125 50,125" fill = "${this.bgColor}"/><text x="100" y="105" font-size="32" text-anchor="middle" fill="${this.textColor}">${this.chars}</text></svg>`;
}};
module.exports = Triangle;