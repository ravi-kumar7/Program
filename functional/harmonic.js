/******************************************************************************
* Execution     : 1. default node cmd> node harmonic.js
*                 2. if nodemon installed cmd> nodemon harmonic.js
* 
* Purpose       : Print the Nth Harmonic Value.
* 
* @description 
* 
* @file         : harmonic.js
* @overview     : Print the Nth Harmonic Value.
* @module       : harmonic - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 14-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let n=readline.question("enter the value:");
let util=require("../utility/functionalUtility");
let result=util.har(n);
console.log("Nth Harmonic Value",result);