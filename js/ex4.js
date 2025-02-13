/* Tutorial 4
Example 4 JavaScript code
*/
// Prompt the user for the first number
let num1Input = prompt("Please enter the first integer number:");

// Validate the first number
if (num1Input === null || num1Input.trim() === "") {
    console.log("Sorry, the first number cannot be blank.");
} else {
    // Convert the input to a number
    let num1 = Number.parseInt(num1Input, 10);

    // Check if the input is a valid integer
    if (isNaN(num1) || !Number.isInteger(num1)) {
        console.log(`Sorry, "${num1Input}" is not a valid integer.`);
    } else {
        // Prompt the user for the second number
        let num2Input = prompt("Please enter the second integer number:");

        // Validate the second number
        if (num2Input === null || num2Input.trim() === "") {
            console.log("Sorry, the second number cannot be blank.");
        } else {
            // Convert the input to a number
            let num2 = Number.parseInt(num2Input, 10);

            // Check if the input is a valid integer
            if (isNaN(num2) || !Number.isInteger(num2)) {
                console.log(`Sorry, "${num2Input}" is not a valid integer.`);
            } else {
                // Perform calculations
                let sum = num1 + num2;
                let difference = num1 - num2;
                let product = num1 * num2;
                let quotient = num1 / num2;
                let remainder = num1 % num2;

                // Output the results
                console.log(`Addition: ${num1} + ${num2} = ${sum}`);
                console.log(`Subtraction: ${num1} - ${num2} = ${difference}`);
                console.log(`Multiplication: ${num1} * ${num2} = ${product}`);
                console.log(`Division: ${num1} / ${num2} = ${quotient}`);
                console.log(`Modulo: ${num1} % ${num2} = ${remainder}`);
            }
        }
    }
}
console.log("kanchi's Output from Tutorial 4 Example 4");