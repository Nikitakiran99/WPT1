function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

const args = process.argv.slice(2);

if (args.length !== 10) {
    console.log("Please enter exactly 10 numbers.");
    process.exit(1);
}

const numbers = args.map(Number);

let sumEvenNumbers = 0;
let sumEvenIndex = 0;
let sumPrimeNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sumEvenNumbers += numbers[i];
    }

    if (i % 2 === 0) {
        sumEvenIndex += numbers[i];
    }

    if (isPrime(numbers[i])) {
        sumPrimeNumbers += numbers[i];
    }
}

console.log("Addition of even numbers only:", sumEvenNumbers);
console.log("Addition of numbers at even indexes:", sumEvenIndex);
console.log("Addition of prime numbers:", sumPrimeNumbers);
