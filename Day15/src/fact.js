import React from 'react';

export function DisplayFact({ number }) {
  function fact(n) {
    if (n < 0) return 'Undefined';
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const factorial = fact(number);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <p>Input Number: {number}</p>
      <p>Factorial: {factorial}</p>
    </div>
  );
}
