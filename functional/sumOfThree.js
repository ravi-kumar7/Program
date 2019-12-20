/******************************************************************************
* Execution     : 1. default node cmd> node sumOfThree.js
*                   2. if nodemon installed cmd> nodemon sumOfThree.js
* 
* Purpose       : Read in N integers and counts the number of triples that sum to exactly 0.

* @description 
* 
* @file         : sumOfThree.js
* @overview     : Read in N integers and counts the number of triples that sum to exactly 0.
* @module       : sumOfThree- This is optional if expeclictly its an npm or local package
* @author       : Anjali<anjali.march19@gmail.com>
* @version      : 1.0
* @since        : 16-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
let num=readline.question("enter the number:");
let arr = [12, 3, 4, 1, 6, 9]; 
    let n =arr.length; 
    let util=require("../utility/functionalUtility");
let output=util.sumOfThreeNum(arr,n);
    
/*try{
    if(n<3)
        throw error;
    else
    {
        var arr=[];
        console.log("Enter" +(rows*cols) +"values into array");
        for(let i=0;i<n;i++)
            arr.push(require.question());
        console.log(sumOfThreeNum(n,arr));
    }
}
catch(error){
    console.log("enter atleast 3 numbers");
}
*/