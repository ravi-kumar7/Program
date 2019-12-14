
function LeapYear(year)
{
    if(year.length!=4 || isNaN(year))
    {
        console.log("enter 4 digit no.");
    }
    else
    {
    if((year % 400==0 ) || (year % 4==0 && year % 100!=0 ))
    {
            console.log(year + " leap year");
        }
    else
        {
            console.log(year + " not a leap year");
        }
    }}

    const readline=require("readline-sync");
    const year=readline.question("enter year:");
    LeapYear(year);