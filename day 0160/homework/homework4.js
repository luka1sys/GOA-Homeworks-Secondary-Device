process.stdin.on('data', (userInput) => {
    input = userInput.toString().trim();
    if (input == 'bye') {
        console.log('Goodbye')
        process.exit()
    }else{
        console.log(input)
    }
})