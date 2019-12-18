/**
 * Sort an array using Bubble Sort.
 */

    
exports.sort=(arr)=>
    {
    /**
     * Taking value in Array.
     * Sort the Array.
     */
        for(let i=0;i<arr.length-1;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
},
/**
 * string is an anagram of another 
 */
exports.isAnagram = (letterOne, letterTwo) => {
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