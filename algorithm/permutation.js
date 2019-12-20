/******************************************************************************
* Execution : 1. default node cmd> node permutation.js
*             2. if nodemon installed cmd> nodemon permutation.js
* 
* Purpose   : return all permutations of a String
* 
* @description 
* 
* @file     : permutation.js
* @overview : Return all permutations of a String
* @module   : permutation- This is optional if expeclictly its an npm or local package
* @author   : Anjali<anjali.march19@gmail.com>
* @version  : 1.0
* @since    : 19-11-2019
*
******************************************************************************/
let readline=require("readline-sync");
function permutations(str) {
	let results = [];

	if (str.length == 1) {
		return [ str ];
	}

	for (let i = 0; i < str.length; i++) {
		let first = str[i];
		let charsRemaining = str.substring(0, i) + str.substring(i + 1);
		let remainingPerms = permutations(charsRemaining);
		for (let j = 0; j < remainingPerms.length; j++) {
			results.push(first + remainingPerms[j]);
		}
	}
	return results;
}

console.log(permutations('abc'));
