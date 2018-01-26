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

characters.push(false); //add a new item to the array
console.log(characters);

showsIWatch.splice(3, 1); // removes true from array (index of true = 3, remove "1" item)
console.log(showsIWatch);

// multi-dimensional array
var meat = ['ham', 'bologna', 'turkey'];
var fruit = ['oranges', 'apples', 'grapes'];
var food = [meat, fruit]; 
console.log(food[1][0]); // logs 'oranges' to the console

// var food = [['ham'], ['oranges']]; // could also be written like this

// Object
var user = {
	firstName: 'Lucille',
	age: 40,
	lastName: 'Bluth',
	hasHair: true,
	'has-feet': true
};
// access properties of our user obj using dot notation
console.log(user.firstName); // log 'Lucille'
// we can also access properties on objs using bracket notation
console.log(user['firstName']); // log 'Lucille'
console.log(user['has-feet']);  // NEED to use square bracket

var numberOne = 1;
var numberTwo = 2;

console.log(numberOne + numberTwo);
console.log(numberOne + 2 + numberTwo);

var firstName = 'John';
var lastName = 'Doe';

console.log(firstName + ' ' + lastName);

var me = {
	firstName: 'Nick',
	lastName: 'Hughes',
	fingerCount: 10
};

var interests = ['Movies', 'Video Games', 'Travel', 'Technology'];

console.log(me.firstName);
console.log(me.firstName + ' ' + me.lastName);
console.log(interests[3]);

interests.push('Hanging Out With Friends');
console.log(interests);

function changePara () {
	document.getElementById('para').innerHTML = me.firstName + ' ' + me.lastName;
}