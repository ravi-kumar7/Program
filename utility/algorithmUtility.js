/**
 * Sort an array using Bubble Sort.
 */
exports.sort = (arr) => {
    /**
     * Taking value in Array.
     * Sort the Array.
     */
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
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
/**
 *  insertion sort to sort strings
 */
exports.inSort =(arr)=>
{
    for(let i=1;i<arr.length;i++)
    {
        let key=arr[i];
        let j=i-1;
        while (j>-1 && (arr[j])> key)
        {
            arr[j+1]=arr[j];
            j--;
            
        }
        arr[j+1]=key;
    }
    return arr;
    

    
    }

