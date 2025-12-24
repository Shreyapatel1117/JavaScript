const accountId = 144553
let accountEmail = "Shreya@gmail.com" // mainly use this
var accountPassword = "12345" // scope problem ({})  use less
accountCity = "Rajkot"
let AccountState;
//there are two types to add variable var,let
// accountId = 2 // not allowed as accountId is const in 1st line
console.log(accountId);

// if you dont want to print each statement again 
//and again use console.table()
console.table([accountEmail , accountPassword , accountCity, AccountState])
