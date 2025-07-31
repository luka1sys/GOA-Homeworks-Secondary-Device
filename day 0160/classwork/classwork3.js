
sum = 0
process.stdin.on('data', (userInfut) => {
    const input = userInfut.toString().trim()

    if (input === 'exit') {
        console.log(sum)
        process.exit()
    }
    sum += parseInt(input)
})