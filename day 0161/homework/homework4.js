const fs = require('fs');
fs.readFile('./text1.txt', 'utf-8', (err,data) =>{
    if (err){
        console.log('eror', err)

    }else{
        console.log(data.toUpperCase())
    }
})