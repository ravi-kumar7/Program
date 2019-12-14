let readline = require("readline-sync");
module.exports = {
    LeapYear=(year) => {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            return true;
        }
        else {
            return false;
        }
    }
}

//wind chill
module.exports={
WindChill =(t,v)=>
{
try{

    let w=35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16);
    return w;
}
catch(e)
{
    console.log(e);
}
}

}
