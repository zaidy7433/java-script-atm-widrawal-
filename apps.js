var balance = prompt("Enter your bank balance:");
var withdrawal = prompt("Enter the amount you want to withdraw:");
var newBalance = balance - withdrawal;
if (newBalance < 0) {
    alert("Insufficient funds!");
} else {
    alert( "your balance:"+ balance +"\n widthdrawal amount:" +withdrawal + "\n Your remaining balance is: " + newBalance);
}