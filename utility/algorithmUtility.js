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
    },
    /**
     *  insertion sort to sort strings
     */
    exports.inSort = (arr) =>
/**
 * Reads in strings
 * prints them in sorted order using insertion sort.

 */ {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j > -1 && (arr[j]) > key) {
                arr[j + 1] = arr[j];
                j--;

            }
            arr[j + 1] = key;
        }
        return arr;
    }
    /**
     * Program to find Word from Word List using Binary Search.
     */

exports.binary = (stringArr, searchword) => {
    /**
     * Read in a list of words
     * prompt the user to enter a word to search the list
     * Use Arrays to sort the word list and then do the binary search
     * Print the result if the word is found
     */
    let start=0;
    let end=stringArr.length-1;
    while(start<=end)
    {
        let mid=(start+end)/2;
        if(searchword==stringArr[mid])
        {
            return mid;
        }
        else if(searchword.localeCompare(stringArr[mid]<0))
        {
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return -1;
}
/**
 * 
 */
exports.permutationIteration=(s)=>
{
    let myList=new Array();
    myList.add(String.valueOf(s.charAt(0)));
    for(let i=1;i<s.length();i++)
    {
        for(let j=myList.size()-1;j>=0;j--)
        {
            let str=myList.remove(j);
            for(let k=0;k<=str.length();k++)
            {
                myList.add(str.substring(0,k)+s.charAt(i)+str.substring(k));
            }
        }
    }
    console.log(myList);
}
/**
 * 
 */
exports.primeNum=()=>
{
    let count,num;
    for(num=0;num<=1000;num++)
    {
        count=0;
        for(let i=2;i<=num/2;i++)
        {
            if(num%i==0)
            {
                count++;
                break;
            }
        }
        if(count==0&&num!=1)
        {
            console.log(num);
        }
    }
}

