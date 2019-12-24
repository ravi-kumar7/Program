const readline = require("readline-sync");
let util = require("../utility/dataStructureUtility");
console.log("choose 1 for Withdraw");
console.log("choose 2 for Deposite");
console.log("choose 3 for Check Balance");
console.log("choose 4 for Exit");
let option = readline.question("enter the choice:");
let result = util.cashCounter(option);
console.log(result);
