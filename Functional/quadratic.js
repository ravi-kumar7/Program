const readline=require("readline-sync");
const a=readline.question("enter the value of a:");
const b=readline.question("enter the value of b:");
const c=readline.question("enter the value of c:");
function Quadratic()
{
let root1=0,root2=0;
let delta=Math.sqrt((b*b) - (4*a*c));
if (delta>0)
{
    root1=(-b + Math.sqrt(delta))/(2*a);
    root2=(-b - Math.sqrt(delta))/(2*a);
    console.log("root1"+root1);
    console.log("root2"+root2);
}
else if(delta==0)
{
root1=root2=-b/(2*a);
console.log("root1"+root1);
console.log("root2"+root2);
}
else
{
    root1=-b/(2*a);
    root2=Math.sqrt((-delta)/(2*a));
console.log("root1"+root1);
console.log("root2"+root2);
}
}
Quadratic();