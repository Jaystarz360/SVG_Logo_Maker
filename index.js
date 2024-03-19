const {writeFile} = require('fs/promises');
const inquirer = require('inquirer');
const Triangle = require('./lib/Triangle');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');

// questions for parameters
const questions = [
    {
      type: 'input',
      name: 'chars',
      message: "Please enter 1 to 3 characters for your logo:",
    },
    {
        type: 'list',
        name: 'logoShape',
        message: "Please select a shape for your logo:",
        choices: [
          {
            name:'Square',
          },
          {
            name:'Circle',
          },
          {
           name:'Triangle',
          }
      ]
    },
    {
      type: 'input',
      name: 'textColor',
      message: "Please enter a color for the text(either keyword or hex number):",
      default() {
        return 'Chartreuse';
      },
    },
    {
        type: 'input',
        name: 'bgColor',
        message: "Please enter a color for the background(either keyword or hex number):",
        default() {
          return 'darkorchid';
        },
      }, 
    ];

function prepLogo(ans){
  let logoSvg;
  //all logos begin with same syntax...
  logoSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  //...and differ when shape is selected
  if (ans.logoShape === "Triangle") {
        const logoTwo = new Triangle(ans.chars, ans.logoShape, ans.textColor, ans.bgColor);
        logoSvg += logoTwo.shape();  
      }else{
        if (ans.logoShape === "Circle") {
          const logoTwo = new Circle (ans.chars, ans.logoShape, ans.textColor, ans.bgColor);
        logoSvg += logoTwo.shape();  
        }else{
          const logoTwo = new Square (ans.chars, ans.logoShape, ans.textColor, ans.bgColor);
          logoSvg += logoTwo.shape();  
        };
      }
//logo is created, write to file, end code
      writeFile(`./My_Logos/${ans.logoShape}.svg`, logoSvg, 
                console.log("logo created in folder 'My_Logos'."));  
  };
  
      
      function askQs() {
        //prompt user for parameters of their logo
        inquirer.prompt(questions).then((ans) => {
        //verify characters is only 1,2 or 3 characters long...
          if (ans.chars.length===0 || ans.chars.length > 3){
            console.log('Must be 1,2 or 3 characters only.');
        //...if false, try again..
            askQs();
        //...if true, run prepLogo routine 
          }else{
            prepLogo(ans);
    }})}


//Begin process
askQs();