/******************************************************************************
* Execution     : 1. default node cmd> node distance.js
*                 2. if nodemon installed cmd> nodemon distance.js
* 
* Purpose       : To print the Euclidean distance 
* 
* @description 
* 
* @file         : distance.js
* @overview     : To print the Euclidean distance from the point (x, y) to the origin (0, 0)
* @module       : distance - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let util=require("../utility/functionalUtility");
try{
let x=readline.question("enter the value of x:"); 
let y=readline.question("enter the value of y:");
let result=util.dist(x,y);
console.log("distance from("+x+","+y+") to (0,0)=",result);
}
catch(err)
{
    console.log(err);
}