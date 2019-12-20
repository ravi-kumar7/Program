/******************************************************************************
* Execution     : 1. default node cmd> node flipCoin.js
*                 2. if nodemon installed cmd> nodemon flipCoin.js
* 
* Purpose       : Calculating percentage of Heads and Tails.
* 
* @description 
* 
* @file         : flipCoin.js
* @overview     : Flip Coin and print percentage of Heads and Tails
* @module       : flipCoin - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 14-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
console.log("enter number of times you want to flip the coin:");
let choice=readline.question();
let util=require("../utility/functionalUtility");
let result=util.flip(choice);
console.log("percentages are:",result);