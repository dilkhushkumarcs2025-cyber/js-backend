//Variables

const accountId = 30353325;
let accountEmail = "dilkhush@google.com";
var accountPassword = "100308";
let accountCity = "Jaipur";
let accountState;


//accountId = 2 // not allowed

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*

Prefer not to use var 
because of issue in block scope and functional scope use let instead of var

*/