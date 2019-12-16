let readline=require("readline-sync");
let m=readline.question("enter the value of m:");
let d=readline.question("enter the value of d:");
let y=readline.question("enter the value of y:");
let y0= y - (14 - m) / 12;
let x = y0 + y0/4 - y0/100 + y0/400;
let m0 = m + 12 * ((14 - m) / 12) - 2;
let d0 = (d + x + (31*m0)/12) % 7;
console.log(d0);