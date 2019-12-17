/******************************************************************************
* Execution     : 1. default node cmd> node harmonic.js
*                 2. if nodemon installed cmd> nodemon harmonic.js
* 
* Purpose       : Print the Nth Harmonic Value.
* 
* @description 
* 
* @file         : harmonic.js
* @overview     : Print the Nth Harmonic Value.
* @module       : harmonic - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let n=readline.question("enter the value:");
function har()
{
       let h=1;
    for(let i=2;i<=n;i++)
    {
        h=h+1/i;
    }
    return h;
}
console.log(har(n));
