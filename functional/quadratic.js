/******************************************************************************
* Execution     : 1. default node cmd> node quadratic.js
*                 2. if nodemon installed cmd> nodemon quadratic.js
* 
* Purpose       : Program to find the roots of the equation a*x*x + b*x + c. 
* 
* @description 
* 
* @file         : quadratic.js
* @overview     : Program to find the roots of the equation a*x*x + b*x + c.
* @module       : quadratic- This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let a=readline.question("enter the value of a:");
let b=readline.question("enter the value of b:");
let c=readline.question("enter the value of c:");
function quadratic()
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
quadratic();