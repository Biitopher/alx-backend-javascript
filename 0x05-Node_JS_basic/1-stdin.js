const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");

rl.on('line', (input) => {
    if (input.trim() !== '') {
        console.log(`Your name is: ${input}`);
    } else {
        console.log("Invalid input. Please enter a valid name.");
    }
});

rl.on('close', () => {
    console.log("\nThis important software is now closing");
});
