// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = "monica"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer(){
    return bestCustomer = 'not bob'
}

function overwriteBestCustomer(name){
    return bestCustomer = name
}

function changeLeastFavoriteCustomer(name){
    return leastFavoriteCustomer = name
}

//console.log(changeLeastFavoriteCustomer("Ross"))