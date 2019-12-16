let readline=require('readline-sync');
let n=readline.question('Enter Number Integer');
try{
    if(n<3)
        throw error;
    else
    {
        var arr=[];
        console.log("Enter" +(rows*cols) +"values into array");
        for(let i=0;i<n;i++)
            arr.push(require.question());
        console.log(sumOfThreeNum(n,arr));
    }
}
catch(error){
    console.log("enter atleast 3 numbers");
}

