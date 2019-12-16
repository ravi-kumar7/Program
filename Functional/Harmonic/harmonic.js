let readline=require("readline-sync");
let n=readline.question("enter the value:");
function Har()
{
       let h=1;
    for(let i=2;i<=n;i++)
    {
        h=h+1/i;
    }
    return h;
}
console.log(Har(n));
