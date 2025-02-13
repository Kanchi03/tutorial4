/* Tutorial 4
Example 1 JavaScript code
*/
// Prompt the user for input
let userInput = prompt("Please enter a number between 1 and 100:");

// Validate the input
if (userInput === null || userInput.trim() === "") {
    // Handle blank input or spaces
    console.log("Sorry, the input is blank or contains only spaces.");
} else {
    // Convert the input to a number
    let number = Number.parseInt(userInput, 10);

    // Check if the input is a valid number between 1 and 100
    if (!isNaN(number) && Number.isInteger(number) && number >= 1 && number <= 100) {
        console.log(`Thank you! You entered ${number}, a valid number.`);
    } else {
        console.log(`Sorry, "${userInput}" is not a valid entry.`);
    }
}
console.log("kanchi's Output from Tutorial 4 Example 1");