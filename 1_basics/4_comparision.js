console.log(2 > 1);  // true
console.log(2 < 1);  // false
console.log(2 >= 1);  // true
console.log(2 <= 1);  // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true


console.log("2"> 1);  // true
console.log("02" > 1);  // true
console.log("2" < 1);  // false
console.log(2 == "2");  // true


console.log(Null > 0);  // false
console.log(Null == 0);  // false
console.log(Null >= 0);  // true
console.log(Null <= 0);  // true

console.log(undefined > 0);  // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false
console.log(undefined <= 0);  // false


console.log("2" === 2);  // false              == => equality operator, it checks only the value of the variable and not the data type of the variable.
console.log("2" !== 2);  // true               === => strict equality operator, it checks the value as well as the data type of the variable.


/* 

in comparison operator, if the data types are different, 
then it converts the data type into number and then compares them. But in case of null and undefined,
it converts null into 0 and undefined into NaN and the ouput is false in case of undefined.

*/
//Specially avoid using this type of code because it is not readable and understandable. 