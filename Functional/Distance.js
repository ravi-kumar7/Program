const readline=require("readline-sync");
const x=readline.question("enter the value of x:");
const y=readline.question("enter the value of y:");
let distance=Math.sqrt(x*x + y*y);
console.log("distance from("+x+","+y+") to (0,0)="+distance);