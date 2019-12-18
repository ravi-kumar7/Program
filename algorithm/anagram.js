/******************************************************************************
* Execution : 1. default node cmd> node anagram.js
*             2. if nodemon installed cmd> nodemon anagram.js
* 
* Purpose   : One string is an anagram of another.
* 
* @description 
* 
* @file     : anagram.js
* @overview : Take 2 Strings as Input and find One string is an anagram of another.
* @module   : anagram- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 13-11-2019
*
******************************************************************************/
let readline = require("readline-sync");
let letterOne = readline.question("enter first Letter:");
let letterTwo = readline.question("enter second Letter:");
let util=require("../utility/algorithmUtility");
let output=util.isAnagram(letterOne,letterTwo);
if(output)
{
    console.log("it is an anagram");
}
else
{
    console.log("Letters are not an anagrm");   
}