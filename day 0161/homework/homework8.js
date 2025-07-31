process.stdout.write('enter letter')

process.stdin.on('data', (input) => {
    const userInput = input.toString().trim().toLowerCase()
    const vowel = ['a', 'e', 'i', 'o', 'u', 'y']
    if (vowel.includes(userInput)) {
        process.stdout.write(`${userInput} is vowel`)
    } else {
        process.stdout.write(`${userInput} is consonant`)
    }

    process.exit();
});