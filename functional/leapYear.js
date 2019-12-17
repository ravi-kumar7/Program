/******************************************************************************
* Execution     : 1. default node cmd> node leapYear.js
*                 2. if nodemon installed cmd> nodemon leapYear.js
* 
* Purpose       : Program to print year is a leap year or not.
* 
* @description 
* 
* @file         : leapYear.js
* @overview     : Program to print year is a leap year or not by taking value from user.
* @module       : leapYear- This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let year=readline.question("enter year:");
function leapYear()
{
    if(year.length!=4)    
    {
        console.log("enter 4 digit no.");
    }
    else
    {
    if((year % 400==0 ) || (year % 4==0 && year % 100!=0 )) 
    {
            console.log(year + " leap year");
        }
    else
        {
            console.log(year + " not a leap year");
        }
    }}
    leapYear(year);