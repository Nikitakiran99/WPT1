import React from 'react';

export function Calculator({ num1, num2 }) {
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Undefined';

  return (
    <div>
      <h2><b>Simple Calculator</b></h2>
      <p>Number 1: {num1}</p>
      <p>Number 2: {num2}</p>
      <p>Sum: {sum}</p>
      <p>Difference: {difference}</p>
      <p>Product: {product}</p>
      <p>Quotient: {quotient}</p>
    </div>
  );
}



