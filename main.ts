#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgMagenta("\n Welcome to Maria Tasleem's currency converter \n"));

// Make an object of currencies & their value based on any one currency list
// our based currency is USD

let currency: any = {
  USD: 1,
  PKR: 279.72,
  Saudi_Riyal: 3.75,
  Indian_Rupee: 83.36,
  EUR: 0.93,
};

let myLoop = true;

while (myLoop) {
  let userInput = await inquirer.prompt([
    {
      name: "from",
      type: "list",
      message: "Select a currency you want to convert from",
      choices: ["USD", "PKR", "Saudi_Riyal", "Indian_Rupee", "EUR"],
    },
    {
      name: "to",
      type: "list",
      message: "Select a currency you want to convert into",
      choices: ["USD", "PKR", "Saudi_Riyal", "Indian_Rupee", "EUR"],
    },
    {
      name: "amount",
      type: "number",
      message: "Enter amount you want to convert",
    },
  ]);
  // destructuring
  let { from, to, amount } = userInput;
  // Getting an amount/value of from & to currencies

  let fromAmount = currency[from];
  let toAmount = currency[to];

  // Now, convert user's currency into base currency which is USD in our case.
  let baseCurrency = amount / fromAmount;

  let convertedAmount = baseCurrency * toAmount;

  let finalOutput = convertedAmount.toFixed(2);
  console.log(`${from} amount ${amount} converted to ${to}= ${finalOutput}\n`);

  let convetAgain = await inquirer.prompt([
    {
      name: "more",
      type: "confirm",
      message: "Do you want more conversions ?",
      default: false,
    },
  ]);

  if (!convetAgain.more) {
    (myLoop = false),
      console.log (chalk.bold.yellow(`\nThank you for using our currency converter App!`));
  }
}
