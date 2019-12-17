/**
 * Sort an array using Bubble Sort.
 */
module.exports = {
    /**
     * Taking value in Array.
     * Sort the Array.
     */
    sort=(arr)=>
    {
    /**
     * sorting the array. 
     */
    
        for(let i=0;i<arr.length-1;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(a[j]>a[j+1])
                {
                    let temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }
            }
        }
        return arr;
    }
},
/**
 * string is an anagram of another 
 */
isAnagram = (letterOne, letterTwo) => {
    /**
     * Taking two strings in array.
     * Comparing string one with string two
     */
    if (letterOne.length != letterTwo.length) {
        return false;
        /**
         * Find the given Strings are anagram or not.
         */
    }
    else {
        let letterOneArray = letterOne.toLowerCase().split('');
        let letterTwoArray = letterTwo.toLowerCase().split('');
        if (letterOneArray.sort().join('').localeCompare(letterTwoArray.sort().join('')) == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}