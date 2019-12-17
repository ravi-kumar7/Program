/******************************************************************************
 *  Execution       :   1. default node         cmd> node windChill.js
 *                      2. if nodemon installed cmd> nodemon windChill.js
 * 
 *  Purpose         : calculate wind chill
 * 
 *  @description    
 * 
 *  @file           : windChill.js
 *  @overview       : calculating wind chill by taking values from user.
 *  @module         : windChill - This is optional if expeclictly its an npm or local package
 *  @author         : BridgeLabz <bridgeit@bridgeit>
 *  @version        : 1.0
 *  @since          : 13-11-2019
 *
 ******************************************************************************/
let readline=require("readline-sync");
let util=require('../utility/functionalUtility');
let t=readline.question("enter the value of t");
let v=readline.question("enter the value of v");
let result=util.windChill(t,v);
console.log(result)