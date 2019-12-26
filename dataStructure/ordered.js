const fs = require("fs");
let linkedList=require("../utility/dataStructureUtility");
let readline = require("readline-sync");
let data = fs.readFileSync("../../program.txt");
console.log("element read from file: \n" + data);
let arr = data; 
console.log("after sorting list is:\n"+arr.sort());
let searchElement = readline.question("Enter a element to search : ");
linkedList.orderedList(arr,searchElement);
