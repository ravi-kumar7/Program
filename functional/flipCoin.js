/******************************************************************************
* Execution     : 1. default node cmd> node flipCoin.js
*                 2. if nodemon installed cmd> nodemon flipCoin.js
* 
* Purpose       : Calculating percentage of Heads and Tails.
* 
* @description 
* 
* @file         : flipCoin.js
* @overview     : Flip Coin and print percentage of Heads and Tails
* @module       : flipCoin - This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 13-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
console.log("enter number of times you want to flip the coin:");
let choice=readline.question();
function flip()
{
let head_count=0,tail_count=0;
let head,tail;
for(let j=0;j<choice;j++)
{
if(Math.random() < 0.5)
{
tail_count++;
}
else{

head_count++;
}}
head=head_count/choice*100;
tail=tail_count/choice*100;
console.log("percentage of head "+ head + "%");
console.log("percentage of tail "+ tail + "%");
}
flip(choice);