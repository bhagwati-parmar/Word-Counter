#! /usr/bin/env node
// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// displaying colorful message 
console.log("=".repeat(45));
console.log(chalk.bold.cyanBright("\n\ Welcome to Code with Bhagwati - WordCounter \n"));
console.log("=".repeat(45));

// prompt the user to enter a sentence 
let answer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:chalk.yellowBright("Enter a Sentence :"),
    }
]);

//triming the sentence and spliting it into words based on "spaces".
let words = answer.sentence.trim().split(" ");

//analysis of user input sentence 
console.log("=".repeat(45));
console.log(chalk.bold("-sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(45));