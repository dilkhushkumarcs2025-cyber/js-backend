let scoreValue = "100"                     // string

console.log(typeof(scoreValue));          // string


let valueNumber = Number(scoreValue)      // convert string to number
console.log(valueNumber);
console.log(typeof(valueNumber));


let score = "100abc"
let valueinNumber = Number(score)
console.log(valueinNumber)                // NaN => Not a Number
console.log(typeof(valueinNumber))     


//"100" => 100
//"100abc" => NaN  


let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)         // convert number to boolean
console.log(booleanisLoggedIn)
console.log(typeof(booleanisLoggedIn))


let someNumber = 0
let SomeNumberInBoolean = Boolean(someNumber)         // convert number to boolean
console.log(SomeNumberInBoolean)
console.log(typeof(SomeNumberInBoolean))



// true => 1
//false => 0
// "" => false
// "Dilkhush" => true
// 0 => false
// 1 => true
// null => false
// undefined => false
// " " => true
// "0" => true
// "1" => true
// "false" => true


/**********************************************************************OPERATIONS**********************************************************************/


let value = 5
let negvalue = -value
console.log(negvalue);

console.log(2 + 2)         // 4
console.log(2 - 2)         // 0
console.log(2 * 2)         // 4
console.log(2 ** 2)        // 4
console.log(2 / 2)         // 1
console.log(2 % 2)         // 0


let str1 = "Hello"
let str2 = " Dilkhush"

let str3 = str1  + str2;
console.log(str3);


console.log(2 + 1 + "2");        // 32
console.log("2" + 1 + 2);        // 212
console.log("2" + 1 + "2");      // 212
console.log("2" + 1 + 2 + "2");    // 2122



console.log(+true);        // 1
console.log(+false);      // 0

console.log(+"");         // 0



//Prefix and Postfix Increment and Decrement

let a = 1;      
let b = ++a;
console.log(a);   // 2
console.log(b);   // 2


let x = 1;
let y = x++;
console.log(x);        // 2
console.log(y);        // 1
console.log(x);        // 2



