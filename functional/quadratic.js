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
* @since        : 16-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let util=require("../utility/functionalUtility");
try{
let a=readline.questionInt("enter the value of a:");
let b=readline.questionInt("enter the value of b:");
let c=readline.questionInt("enter the value of c:");
let res=util.quadratic(a,b,c);
console.log("values are:",res);
}
catch(err)
{
    console.log(err);
}