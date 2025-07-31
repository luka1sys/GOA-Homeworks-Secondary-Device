
const randomError = () => {
    const randomNumber = Math.round(Math.random());
    try {
        if (randomNumber == 1) {
            throw new Error("error pizdec")
            
        }
    } catch (err) {
        console.log(err.message)
        console.log(randomNumber)

    }

}
randomError()