let readline=require("readline-sync");
console.log("enter number of times you want to flip the coin:");
let choice=readline.question();
function Flip()
{
let head_count=0,tail_count=0;
let head,tail;
for(let j=0;j<choice;j++)
{
if(Math.random() < 0.5)
{
tail_count++;
}
else{

head_count++;
}}
head=head_count/choice*100;
tail=tail_count/choice*100;
console.log("percentage of head "+ head + "%");
console.log("percentage of tail "+ tail + "%");
}
Flip(choice);