/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator:
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("second array:", arr2);
//  -note: if console.log arr1,then 4 has also been pushed to array 1. This is because 2nd array is not a copy
//  of 1st array, but is a new variable which points to the same object as variable arr1.
// -so anything done to arr2 will be done to arr1 and vice versa. To resolve this, see 'copying an array' spread operator
console.log("first array:", arr1)


// Copying an array:
let arr3 = [4, 5, 6];
// -spread operator 'spreads' the values of arr3 into arr4, thereby creating a new object
let arr4 = [...arr3];
// -so when adding an extra value...arr3 remains untouched by .push
arr4.push(7);
console.log("third array:", arr3);
console.log("fourth array:", arr4);


// Copying an object:
let obj1 = { a: 1, b: 2, c: 3 };
// -spread obj1 into obj2 
let obj2 = {...obj1, d: 4 };
console.log("first object:", obj1);
console.log("second object:", obj2);
// -to change a value in the original object (obj1), overwrite it in a new object (obj3)
let obj3 = {...obj1, b: 5 };
console.log("third object:", obj3);



// Copying only part of an array/object:
// -spread operator doesn't need to make up entirety of the object or array you create it with.
// -i.e. to combine several objects into a new object...
let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"];
console.log("fifth object:", arr5);

