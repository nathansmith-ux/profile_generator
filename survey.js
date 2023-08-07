const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? ', (name) => {
  rl.question('What\'s your favourite activity? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('What\'s your favourite thing to eat? ', (eat) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? ', (superpower) => {
              console.log(` Thank you for your feedback ${name}. Your favourite activity is ${activity} and you like to listen to ${listen} while doing so. Your favourite meal is ${meal} of which your favourite food to eat at this meal is ${eat}. Your favourite sport is ${sport} and something that you're amazing at is ${superpower}`)
              rl.close()
            })
          })
        })
      })
    })
  })
});