const readline=require("readline-sync");
const t=readline.question("enter the value of t");
const v=readline.question("enter the value of v");
if((t>50)||(v>120 || v<3))
{
    console.log("error");
}
else{
const w= 35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16);
console.log(w);
}