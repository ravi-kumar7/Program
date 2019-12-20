/******************************************************************************
* Execution : 1. default node cmd> node bubbleSort.js
*             2. if nodemon installed cmd> nodemon bubbleSort.js
* 
* Purpose   : Reads the value and prints them in sorted order using Bubble Sort
* 
* @description 
* 
* @file     : bubbleSort.js
* @overview : Reads the value and prints them in sorted order using Bubble Sort
* @module   : bubbleSort- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 18-11-2019
*
******************************************************************************/
let arr =[7,4,5,3,9,2,1];
console.log("Before sorting the array is:",arr);
let util=require("../utility/algorithmUtility");
let sortedArray=util.sort(arr);
console.log("After sorting the array is:",sortedArray);
