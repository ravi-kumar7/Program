let readline=require("readline-sync");
let p=readline.question("enter the value of p:");
let y=readline.question("enter the value of y:");
let R=readline.question("enter the value of r:");
let r=R/(12*100);
let n=12*y;
let payment=(p*r)/(1 - Math.pow(1+r, -n))
console.log(payment);