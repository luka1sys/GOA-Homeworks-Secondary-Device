const fs = require('fs')

fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('error')
    } else {
        console.log('no error',data)
    }
})

const data = fs.readFileSync('./text.txt', 'utf-8')
console.log(data)

