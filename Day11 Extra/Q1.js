function multiplyIfPositive(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 > 0 && num2 > 0) {
            const product = num1 * num2;
            resolve(product);
        } else {
            reject('Both numbers must be positive to multiply.');
        }
    });
}

// Example usage:
// Accept numbers from command line arguments
const args = process.argv.slice(2);
const num1 = Number(args[0]);
const num2 = Number(args[1]);

multiplyIfPositive(num1, num2)
    .then(result => {
        console.log(`Multiplication result: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });

