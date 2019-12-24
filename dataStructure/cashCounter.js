/******************************************************************************
* Execution     : 1. default node cmd> node cashCounter.js
*                 2. if nodemon installed cmd> nodemon cashCounter.js
* 
* Purpose       : Program to create Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
* 
* @description 
* 
* @file         : cashCounter.js
* @overview     : Program to create Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
* @module       : cashCounter - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 24-11-2019
*
******************************************************************************/
const readline = require("readline-sync");
let util = require("../utility/dataStructureUtility");
console.log("choose 1 for Withdraw");
console.log("choose 2 for Deposite");
console.log("choose 3 for Check Balance");
console.log("choose 4 for Exit");
let choice = readline.questionInt("enter the choice:");  
let result=util.cashCounter(choice);
