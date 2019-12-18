/******************************************************************************
 *  Execution     : 1. default node         cmd> node stringReplace.js 
 *                  2. if nodemon installed cmd> nodemon stringReplace.js
 * 
 *  Purpose       : Replace a given string with new string
 * 
 *  @description    
 * 
 *  @file         : stringReplace.js
 *  @overview     : Replacing old string with new string
 *  @module       : stringReplace - This is optional if expeclictly its an npm or local package
 *  @author       : Anjali<anjali.march19@gmail.com>
 *  @version      : 1.0
 *  @since        : 12-11-2019
 *
 ******************************************************************************/
let readline=require("readline-sync");
console.log('hello username..how r u?');
let b=readline.question("enter the name:");
let c=readline.question('enter the string you want to replace:')
let util=require("../utility/functionalUtility");
let output=util.strngs(b,c);
console.log("after replacement:",output);