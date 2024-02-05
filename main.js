                                    /* Arrays Exercise #1 */

/* Take the 5 values assigned to the 5 variables and store them
 in the provided blank array instead. When you are done, there should 
 be no variables with string values left in your code - only the fruits variable. */

const yellowFruit = "Banana"
const orangeFruit = "Orange"
const redFruit = "Apple"
const greenFruit = "Watermelon"
const blueFruit = "Blueberry"

const fruits = [ "Banana", "Orange", "Apple", "Watermelon", "Blueberry" ]

console.log(fruits)



                                    /* Arrays Exercise #2 */

/* You work in a fancy restaurant. You are in your first month, and everyone they hire starts
 in the kitchen as a dish cleaner. Your job, specifically, is to scrub the glasses clean. 
 Over in the code editor, you will find an array of dirty dishes. This represents the large sink 
 in the back of the restaurant where the waiters place all of the dirty dishes.

Copy the following code into the file. */  

const dishes = [
    "Dinner plate", "Water glass", "Salad bowl",
    "Dinner plate", "Wine glass", "Spoon",
    "Spoon", "Fork", "Salad bowl", "Whiskey glass",
    "Fork", "Spoon", "Fork"
]

/*
    Declare three variables to store the string value
    of a glass in the array. Use the correct index to
    get the right value.
*/

const waterG = dishes[1]
const wineG = dishes[4]
const whiskeyG = dishes[9]  //added my 3 variables

/* Your job is to identify the 3 dirty glasses by using the
 their index in the array and assign each one to its own variable.
*/


console.log("I am cleaning the following glasses:")

// Put each variable in one of the parenthesis below
console.log(waterG)
console.log(wineG)
console.log(whiskeyG)
