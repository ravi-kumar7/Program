/******************************************************************************
* Execution    : 1. default node cmd> node monthlyPayment.js
*                2. if nodemon installed cmd> nodemon monthlyPayment.js
* 
* Purpose      : calculating monthlyPayment
* 
* @description 
* 
* @file        : monthlyPayment.js
* @overview    : calculating monthlyPayment by taking value from user.
* @module      : monthlyPayment- This is optional if expeclictly its an npm or local package
* @author      : Anjali<anjali.march19@gmail.com>
* @version     : 1.0
* @since       : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let principal=readline.question("enter the value of p:");
let year=readline.question("enter the value of y:");
let Rate=readline.question("enter the value of R:");
let r=R/(12*100);
let n=12*year;
let payment=(principal*r)/(1 - Math.pow(1+r,-n))
console.log(payment);