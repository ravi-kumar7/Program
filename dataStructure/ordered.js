const fs = require("fs");
let linkedList=require("../utility/dataStructureUtility");
let readline = require("readline-sync");
let data = fs.readFileSync("../../program.txt");
console.log("element read from file: \n" + data);
let arr = data; 
arr.sort();
console.log("after sorting list is:")
console.log(arr);
let searchElement = readline.question("Enter a element to search : ");
linkedList.orderedList(arr,searchElement);
