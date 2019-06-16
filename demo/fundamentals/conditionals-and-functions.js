/*
 *Conditionals, Functions, Scope and Loops.
 */

// Equals
let equals = 1 == "1";
console.log(equals)

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;

function compareStorePrices (storeA, storeB) {

}if (storeAIsLower) {
	console.log("Store A has a lower price.")
} else if (storeB < storeA) {
	console.log("Store B has a lower price")
}	else {
		console.log("Their prices are equal.")
}

compareStorePrices(10,5);
compareStorePrices(7, 10);

function squareNum (number) {
	let squared = number * number;
	return squared;
}

let squareNumber = squareNum(10);
console.log (squareNumber);


/*...*/
/*...*/
/*...*/

let x = 10;

function addNumbers (n, m, x) {

	return n + m;


	addNumbers (2, 3, 8)
	console.log(x);
}
{
	console.log (n);
	let b;
	if (1===1) {
		b = 8;
	}
	console.log(b);
	return n + m
}

addNumbers (1, 2, 10);


/*...*/
/*...*/
/*...*/
/*...*/

let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
console.log(ourArray[3][4]);

for(let i = 0; i<arrLen.length; i++); {
	//console.log("i is equal to: " + i);
	console.log(ourArray[i]);
for(let i =0; j<10; j++); {
	console.log('j is equal to 0');

}
}
let number = 0;
while (x < 10) {
	console.log('Ran');
	x = x + 1;
}