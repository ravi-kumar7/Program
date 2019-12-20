/******************************************************************************
* Execution     : 1. default node cmd> node factor.js
*                 2. if nodemon installed cmd> nodemon factor.js
* 
* Purpose       : Calculate the prime factorization of N
* 
* @description 
* 
* @file         : factor.js
* @overview     : Calculate the prime factorization of N.Taking the value of N from user.
* @module       : factor - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let util=require("../utility/functionalUtility");
try{
let num=readline.question("enter the number:");
let result=util.factorial(num);
console.log("The prime factorization of " + num + " is: ",result);
}
catch(err)
{
    console.log(err);
}