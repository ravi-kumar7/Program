const readline=require("readline-sync");
let n=readline.question("enter the number:");
function Factorial()
{
console.log("The prime factorization of " + n + " is: ");
for (let factor = 2; factor*factor <= n; factor++) {
    while (n % factor == 0) 
    {
        console.log(factor + " "); 
        n = n / factor;
    }
}
if (n > 1) 
console.log(n);
else
console.log();
}
Factorial();