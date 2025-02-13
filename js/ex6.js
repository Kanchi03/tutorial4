/* Tutorial 4
Example 6 JavaScript code
*/
// Prompt the user for a number
let numberInput = prompt("Please enter a number:");

// Convert the input to a number
let number = Number(numberInput);

// Validate the input (assume valid input as per requirements)
if (!isNaN(number)) {
    // Use a loop to generate the multiplication table
    for (let i = 0; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}
console.log("kanchi's Output from Tutorial 4 Example 6");