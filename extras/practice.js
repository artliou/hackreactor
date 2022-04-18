practice.js

var salesTeam = [{name: {first: 'aleen', last: 'atkins'}, age: 26, sales: '$2314'},
    {name: {first: 'alvaro', last: 'angelos'}, age: 55, sales: '$1668'},
    {name: {first: 'denese', last: 'dossett'}, age: 29, sales: '$9248'},
    {name: {first: 'douglas', last: 'denney'}, age: 53, sales: '$5058'},
    {name: {first: 'earline', last: 'erickson'}, age: 19, sales: '$18876'},
    {name: {first: 'herman', last: 'hazell'}, age: 25, sales: '$2746'},
    {name: {first: 'homer', last: 'hirth'}, age: 26, sales: '$474'},
    {name: {first: 'hwa', last: 'heidt'}, age: 53, sales: '$9607'},
    {name: {first: 'hyon', last: 'hampshire'}, age: 46, sales: '$13598'},
    {name: {first: 'issac', last: 'ingerson'}, age: 45, sales: '$5225'},
    {name: {first: 'jeraldine', last: 'joplin'}, age: 39, sales: '$2891'},
    {name: {first: 'jin', last: 'jeffrey'}, age: 17, sales: '$14402'},
    {name: {first: 'joleen', last: 'jolin'}, age: 45, sales: '$15736'},
    {name: {first: 'jude', last: 'jarrett'}, age: 53, sales: '$7557'},
    {name: {first: 'magda', last: 'mireles'}, age: 18, sales: '$1498'},
    {name: {first: 'mistie', last: 'montealegre'}, age: 31, sales: '$6920'},
    {name: {first: 'nancy', last: 'napoli'}, age: 49, sales: '$5255'},
    {name: {first: 'regine', last: 'rohrbaugh'}, age: 33, sales: '$7881'},
    {name: {first: 'rolando', last: 'riebel'}, age: 35, sales: '$8573'},
    {name: {first: 'scarlett', last: 'stagg'}, age: 36, sales: '$7126'},
    {name: {first: 'sherron', last: 'strawn'}, age: 36, sales: '$8848'},
    {name: {first: 'susan', last: 'shilling'}, age: 29, sales: '$8542'},
    {name: {first: 'tama', last: 'tworek'}, age: 16, sales: '$9200'},
    {name: {first: 'tonisha', last: 'taunton'}, age: 41, sales: '$5219'},
    {name: {first: 'vergie', last: 'villescas'}, age: 25, sales: '$8712'}];

/*
SECTION ONE
Getting Comfortable with Last Assessment

Before every Problems
1. Sculpt out thought process. 
2. Psuedocode
3. Stubbing (make functions)
4. Outlining

IF STUCK
1. Check code
2. CHECK DOCUMENTATION
3. Log stuff.
4. Ask questions.

*/
function capitalizeName (name) {
  // input: string
  // output: string --> capitlized first letter
    // require: Use slice();
}

// Uncomment below to test
// assert('barney'=== 'Barney', 'should return "Barney"');

function capitalize(array) {
  // input: aray
  // output: none
  // should capitalize first and last names in salesTeam
    // no output
}

// Uncomment below to test
//console.log(capitalize(salesTeam));

function changeSalesToNum (person) {
  // input: person Object e.g {...}
  // output: sales as nuber e.g 4364
  // should return the sales of a person (a number), give the person object
}

// Uncomment below to test
//console.log(changeSalesToNum(salesTeam[0]), 'should return "2314');

function returnLowestEarner (salesTeam) {
  // input: salesTeam array
  // output: <lastName>, <firstName>: <sales> string
    // ex. "Johnson, Joe: $10"
    // Require: Use changeSalesToNum();
}

// Uncomment below to test
//console.log(returnLowestEarner(salesTeam), 'should return Homer Hearth: $1734');

function returnHighestEarner (salesTeam) {
  // input: salesTeam array
  // output: <lastName>, <firstName>: <sales> string
    // ex. "Jackson, Michael: $2000"
    // Require: Use changeSalesToNum();
}

// Uncomment below to test
// console.log(returnHighestEarner(salesTeam), 'should return Earline Erickson: $18876');

function is40Plus (person) {
  //input: person object
  // output: boolean
  // Should return true if person is older than or equal to 40
    // False otherwise.
}

// Uncomment below to test
//console.log(is40Plus(salesTeam[0]), 'should return "false"');

function get40Plus (salesTeam) {
  //input: salesTeam array
  // output: function that when runs, returns array of personObjects whose ages
    // are equal to or greater than 40
  // Require: Use filter(), use is40Plus, returns a function
}

// Uncomment below to test
//console.log(get40Plus(salesTeam)());

/*
SECTION TWO
Each, Map, Filter, Reduce Fun!

Before every Problems
1. Sculpt out thought process. 
2. Psuedocode
3. Stubbing (make functions)
4. Outlining

IF STUCK
1. Check code
2. CHECK DOCUMENTATION
3. Log stuff.
4. Ask questions.

*/

// DO NOT MODIFY CODE BELOW THIS TILL LINE 130
let victorSkills = {
  name: 'Victor',
  drive: function () {
    console.log(this.name + ' goes vroooom');
  }
};

let lily = {
  name: 'Lily',
};
// DO NOT MODIFY CODE ABOVE THIS TILL 117

function makeLilyGoVroom () {
  // input: none;
  // output: none;
  // This function returns nothing
  // running this function should make log "Lily goes vroooom";
    // Required: use victorSkills.drive(), use `lily`
    // Hint: Use apply/call
}

makeLilyGoVroom(); // 'Should log "Lily goes vroooom" if abv function is good';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function each2(collection, iterator) {
  // input: array, function
  // output: nothing
  // iterator should be called for each element in an array
    // iterator should be called with 3 parameters
      // (element, index, arrayEach is called on)
}

//TESTING SUITE
let scaryNumbers = [];
each2(numbers, function (el) {
  scaryNumbers.push(Math.pow(2) + " ah!");
});

// What do you expct the value of `scaryNumbers` to be?
//console.log(scaryNumbers); Uncomment me to test!


function map2(collection, iterator) {
  var arr = [];
  // input: array, function
  // output: array
  // Map should return a new array whose values are the elements in the old array returned from calling iterator on them
 // Require: Use each()
  // Warn: Make parameters name when calling functions inside functions different
    // unless you're referring to the outer function's parameters ofc.
  
  return arr;
}

function filter2(collection, iterator) {
  //input: array, function
  // output: array
  // filter should return a new array whose values are elements from the old array that when passed into iterator return true. You know the drill
  // Require: Use each
  var arr = [];
  /*
  Hint
  loop thru collection
    // do something
  */
  return arr;
}

var evenNumbers = filter2(numbers, isEven);
//assertArraysEqual(evenNumbers, [2, 4, 6, 8, 10], 'should return even array numbers'); // Uncomment me to test!


// Checkout this function
let numbers2 = ['humpty', 'dumpty', 'sat', 'on', 'a', 'wall'];
let objNumbers2 = numbers2.reduce(function (obj, currVal, i) {
  obj[i + 1 + String(0)] = currVal;
  return obj;
}, {});

// What do you expect to logged out?
//console.log(objNumbers2); // Uncomment me!
// Well, was it what you expected?

// Your turn!

let emerson = ['two', 'roads', 'and', 'i', 'crossed'];
let objNumbers3; 

// Make objNumbers3 refer to an object that looks like this: 
/*
{ '10': 'two',
  '20': 'roads',
  '30': 'and',
  '40': 'i',
  '50': 'crossed' }
*/
let bleh = [10, 4, 6, 7];
function reduce2(collection, iterator, accumulator) {
  // input: array, function, value/object/array
  // output: value/object/array
  // Require: Use each
  // iterator takes 2 parameters (memo, currentValue)
    // if accumlator is undefined
      // memo will be the first element (index 0)
      // currentValue will be 2nd element (index 1)
    // if accumlator is defined
      // memo will be accumlator
      
  // Reduce loops thru each item in collection
    // memo is set to the value returned by iterator(memo, currentValue)
    
  //memo is returned. Reduce end.
}

// UNCOMMENT BELOW TO TEST
// var sumOfBleh = reduce2(bleh, (acc, currVal) => 
//   acc + currVal
// );
// assert(sumOfBleh === 27, 'should utilize reduce to return sum of numbers in array');

function dontWakeMeTillAfterThree(message) {
  // input: string
  // output: none
  // should return a function that, when run from 0 to 3 times, does nothing, on the 4th call
    // the function should post an alert with the message passed in as the paramter to this function
  // Hint: Closures, setTimeout
}

function oddRuns() {
  // input: none
  // output: none
  /// should return a function that, only runs every other invocation!
    // the returned function takes 1 parameter string
      // when the funciton runs, it alerts with the message provided from the above string
    // e.g var bleh = oddRuns();
      // bleh(message) // alert(message);
      // bleh(message2) // nothing happens;
      // bleh(message3) // alert(message3);
  
}
/*
Congratulations. If you've coded your way this far, your javascript acuity is awesome! You're definitely going to nail the 1 on 1 interview! Don't forget the following soft skills to work on that might put the icing on the cake that is your awesomeness!

1. Explaining thought process, psuedocoding, stubbing and outline.
2. Taking with your interviewer!
3. Knowing and being able to pitch your programming why!
  a. Why do you do what you do?
  b. How is HR going to help you with your goals?
  c. What are your plans after graduation?
  d. What is your dream job?
  
Thank you for taking this assessment and I look forward to hearing from you or your future coding impacts.

ALL FEEDBACK IS APPRECIATED, PLEASE DM  TO @victor_ngo ON SLACK
*/

function assertArraysEqual(array1, array2, descriptionOfExpectedBehavior) {
  var longestArray = array1.length > array2.length ? array1 : array2;
  var shorterArray = array1.length > array2.length ? array2 : array1;
  var areArraysSame = longestArray.reduce((acc, currVal, i) => {
    if (!acc) {
      return acc;
    }
    return shorterArray[i] === currVal;
  }, true);
  
  if (areArraysSame) {
    console.log('passed');
  } else {
    console.log(descriptionOfExpectedBehavior);
  }
}

function assert(test, descriptionOfExpectedBehavior) {
  if (test) {
    console.log('passed'); 
  } else {
    console.log(descriptionOfExpectedBehavior);
  }
}

function assertObjectsEqual(actual, expected, descriptionOfExpectedBehavior) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed'); 
  } else {
    console.log(descriptionOfExpectedBehavior);
  }
}

function squareIt(num) {
  return num * num;
}
function isEven(num) {
  return num % 2 === 0;
}

//CREATED BY: VICTOR NGO [COHORT HR78];