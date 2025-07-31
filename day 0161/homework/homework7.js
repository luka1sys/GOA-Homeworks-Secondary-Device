const process = require('process');

// მოთხოვნა პაროლზე
process.stdout.write('enter password: ');

process.stdin.on('data', (input) => {
    const password = input.toString().trim();
    const pass = 'x'.repeat(password.length);
    
    console.log('your password is :', pass);

    process.exit(); 
});