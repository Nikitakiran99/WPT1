
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1);
}


const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 0) {
    console.log("Please provide a non-negative integer as an argument.");
} else {
    const fact = factorial(num);
    console.log("Factorial of number:", fact);
}


