process.stdin.on('data', (userInput) => {
    input = userInput.toString().trim();
    const text = input.toUpperCase()
    console.log(text)
    process.exit()
})