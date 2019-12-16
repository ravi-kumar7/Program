let readline=require("readline-sync");
let n=readline.question("enter the value:");
function Powerof()
{
let i=0;
let power=1;
console.log("power of 2^"+n);
while(i<=n)
{
    console.log("2^ " +i+ "=" + power);
    power=power*2;
    i++;
}
}
Powerof()