/*Write a function getFactorialImpl ( choice="FORLOOP" ) ----it could be FORLOOP or RECUR
    Function Fact2(n1)
    Use recursion and print the factorial
    If the choice is FORLOOP return Fact1
    If the choice is RECUR then return Fact2
    Outside --- call let rv = getFactorialImpl("RECUR")
    rv(3)
    Rv = getFactorialImpl()
    rv(5)*/


function getFactorialImpl(choice = "FORLOOP") {

  // Iterative factorial using for loop
  function Fact1(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // Recursive factorial function
  function Fact2(n) {
    if (n <= 1) return 1;
    return n * Fact2(n - 1);
  }

  if (choice == "RECUR") {
    return Fact2;
  } else {
    return Fact1;
  }
}

// Outside calls
let rv = getFactorialImpl("RECUR");
console.log(rv(3));  // 6

rv = getFactorialImpl();
console.log(rv(5));  // 120
