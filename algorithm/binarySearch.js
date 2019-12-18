let readline=require("readline-sync");
let util=require("../utility/algorithmUtility");
let stringArr=["d","s","a","r","j"];
let searchword=readline.question("enter the string");
let result=util.binary(stringArr,searchword);
if(result==-1)
{
    console.log(searchword, "not found in list");
}
else{
    console.log(searchword,"found in list");
}
