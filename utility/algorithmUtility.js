/**
 * Sort an array using Bubble Sort.
 * @param Taking value in Array.
 * @return Sorting the Array.
 */
exports.sort = (arr) => {
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
     * string is an anagram of another.
     * @param Taking two strings in array.
     * @return Comparing string one with string two and return the result.
     */
    exports.isAnagram = (strOne, strTwo) => {
        if (strOne.length != strTwo.length) {
            return false;
        }
        else {
            let strOneArr = strOne.toLowerCase().split('');
            let strTwoArr = strTwo.toLowerCase().split('');
            if (strOneArr.sort().join('').localeCompare(strTwoArr.sort().join('')) == 0) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    /**
     *  insertion sort to sort strings
     * @param Reads in strings.
     * @return prints them in sorted order using insertion sort.
     */
    exports.inSort = (arr) => {
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
 * @param Read in a list of words
 * @param prompt the user to enter a word to search the list
 * @param Use Arrays to sort the word list and then do the binary search
 * @return Print the result if the word is found
 */

exports.binary = (stringArr, searchword) => {
    let start = 0;
    let end = stringArr.length - 1;
    while (start <= end) {
        let mid = (start + end) / 2;
        if (searchword == stringArr[mid]) {
            return mid;
        }
        else if (searchword.localeCompare(stringArr[mid]) < 0) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}
/**
 * find the Prime numbers
 * @param Taking value from 0-1000
 * @return print prime numbers
 */
exports.primeNum = () => {
    let count, num;
    for (num = 0; num <= 1000; num++) {
        count = 0;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                count++;
                break;
            }
        }
        if (count == 0 && num != 1) {
            console.log(num);
        }
    }
}
/**
 * Customize Message Demonstration
 * @param read in the Message
 * @param Replace <<name>> by first name
 * @param replace <<full name>> by user full name.
 * @param replace occurance of mobile number
 * @return replace date
 */
exports.data = (message, firstName, lastName, fullName, contactNumber, date) => {
    try {
        message = message.replace("<<name>>", firstName);
        message = message.replace("<<full name>>", fullName);
        message = message.replace("XXXXXXXXXX", contactNumber);
        message = message.replace("01/01/2016", date);
        console.log(message);
    }
    catch (error) {
        console.log(error);
    }
}
