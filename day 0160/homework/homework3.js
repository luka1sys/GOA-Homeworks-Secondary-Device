process.stdin.on('data', (userInput) => {
    const input = userInput.toString().trim()
    if (input === 'securedPassword123') {
        process.stdout.write('Access granted')
        process.exit()
    } else {
        process.stdout.write('Wrong password')
    }
})
