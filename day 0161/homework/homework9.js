const fs = require('fs')


process.stdin.on('data', (input) => {
    const userInput = input.toString().trim()

    fs.appendFile('text2.txt', userInput, (err) => {
        if (err) {
            console.log('erorr', err)
        }else{
            console.log('Addition successful.')
        }
    })

})





