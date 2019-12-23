const fs = require("fs");
let linkedList=require("../utility/dataStructure");
let readline = require("readline-sync");
let data = fs.readFileSync("../Anjali.txt");
console.log("String data read from file: \n\n" + data);
let stringArray = data.toString().toLocaleLowerCase().split(' '); 
let searchElement = readline.question("Enter a word to search : ");
linkedList.unOrderedList(stringArray,searchElement); 