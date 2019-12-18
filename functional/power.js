/******************************************************************************
* Execution    : 1. default node cmd> node power.js
*                2. if nodemon installed cmd> nodemon power.js
* 
* Purpose      : Prints a table of the powers of 2.

* 
* @description 
* 
* @file        : power.js
* @overview    : Prints a table of the powers of 2 that are less than or equal to 2^N.
* @module      : power- This is optional if expeclictly its an npm or local package
* @author      : Anjali<anjali.march19@gmail.com>
* @version     : 1.0
* @since       : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let n=readline.question("enter the value:");
let util=require("../utility/functionalUtility");
let result=util.powerof(n);
