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
let util=require("../utility/functionalUtility");
let res=util.quadratic(a,b,c);
console.log("values are:",res);