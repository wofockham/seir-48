const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

console.log(chalk.blue('THIS IS GREEN'));

// it really is this much trouble
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter some text: ', function (response) {
  console.log(
    chalk.red(
      figlet.textSync(response, {
        font: 'Sweet',
        verticalLayout: 'default',
        horizontalLayout: 'default'
      })
    )
  );
  rl.close();
});
