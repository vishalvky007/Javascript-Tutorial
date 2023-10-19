const accountId = 144553
let accountEmail = "vky@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "2131313"
accountCity = "Bangalore"
let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/