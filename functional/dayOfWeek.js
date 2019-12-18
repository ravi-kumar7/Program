/******************************************************************************
* Execution : 1. default node cmd> node dayOfWeek.js
*             2. if nodemon installed cmd> nodemon dayOfweek.js
* 
* Purpose   :Takes a date as input and prints the day of the week that date falls on.
* 
* @description 
* 
* @file     : dayOfWeek.js
* @overview : Takes a date as input and prints the day of the week that date falls on.
* @module   : dayOfWeek- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let m=readline.question("enter the value of m:");
let d=readline.question("enter the value of d:");
let y=readline.question("enter the value of y:");
let util=require("../utility/functionalUtility");
let result=util.dayOf(m,d,y);
console.log(result);