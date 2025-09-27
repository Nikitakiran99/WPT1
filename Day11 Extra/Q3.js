const input = Number(process.argv[2]);

if (isNaN(input) || input < 1 || input > 5) {
    console.error("Error: Please enter a number between 1 and 5.");
    process.exit(1);
}

for (let i = input; i >= 1; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}
