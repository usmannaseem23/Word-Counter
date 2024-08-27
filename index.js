#! /usr/bin/env node
// Import the inquirer module , which is command line interface for node.js
import inquirer from "inquirer";
// Declare a constant "answer" and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word ",
    },
]);
const words = answers.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//    print the word count of the sentence to the console
console.log(`your sentence word count is  ${words.length}`);
