// alerts are annoying, let's use console.log
console.log('Welcome');
/*
	This will now log to your console
*/

// Create a function that updates a DOM element
function change() {
	//function body. Where it all goes down.
	document.getElementById('foo').innerHTML = 'Welcome';
}

// Basic data types in javascript
var name = 'Lucille'; //Store a string in a var
var numberOfWidgets = 10; //number
var isCodingCool = true; //boolean
console.log(name); // log the value of a var to the console

// store an array in a var
var characters = [50, true, 'Lucille', 'Michael Bluth', 'Tobias', 10, 2];
console.log(characters[2]); // this will log Lucille to the console

var myName = 'Nick';
var myAge = '26';

var showsIWatch = ['Arrow', 'Flash', 'This is Us', true, 3];

console.log(myName);
console.log(myAge);
console.log(showsIWatch[1]); // displays Flash

console.log(showsIWatch[4] + 50);

//add a new item to the array
characters.push(false);
console.log(characters);

showsIWatch.splice(3, 1); // removes true from array (index of true = 3, remove "1" item)

console.log(showsIWatch);