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
let N=readline.question("enter the number:");
console.log("The prime factorization of " + N + " is: ");
for (let factor = 2; factor*factor <= N; factor++) {
    while (N % factor == 0) 
    {
        console.log(factor + " "); 
        N = N / factor;
    }
}
if (N > 1) 
console.log(N);
else
console.log();
