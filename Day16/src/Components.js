import React, { useState } from 'react';

// Factorial Component
function Factorial({ initialNumber = 0 }) {
  const [number, setNumber] = useState(initialNumber);

  const calculateFactorial = (num) => {
    num = Number(num);
    if (num < 0 || !Number.isInteger(num)) return "Invalid";
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
  };

  return (
    <div style={{ marginBottom: '15px', padding: '15px', background: '#f9f9f9', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h3 style={{ margin: '0 0 10px', fontSize: '18px' }}>Factorial</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number"
        style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <p style={{ margin: '5px 0' }}>Result: <span style={{ fontWeight: 'bold' }}>{calculateFactorial(number)}</span></p>
    </div>
  );
}

// Calculator Component (All Operations)
function Calculator({ num1 = 0, num2 = 0 }) {
  const [number1, setNumber1] = useState(num1);
  const [number2, setNumber2] = useState(num2);

  return (
    <div style={{ marginBottom: '15px', padding: '15px', background: '#f9f9f9', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h3 style={{ margin: '0 0 10px', fontSize: '18px' }}>Calculator</h3>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Number 1"
        style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Number 2"
        style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <p style={{ margin: '5px 0' }}>Add: <span style={{ fontWeight: 'bold' }}>{Number(number1) + Number(number2)}</span></p>
      <p style={{ margin: '5px 0' }}>Subtract: <span style={{ fontWeight: 'bold' }}>{Number(number1) - Number(number2)}</span></p>
      <p style={{ margin: '5px 0' }}>Multiply: <span style={{ fontWeight: 'bold' }}>{Number(number1) * Number(number2)}</span></p>
      <p style={{ margin: '5px 0' }}>Divide: <span style={{ fontWeight: 'bold' }}>{number2 == 0 ? "Cannot divide by zero" : Number(number1) / Number(number2)}</span></p>
    </div>
  );
}

// Single Operation Calculator Component
function SingleOperationCalculator({ num1 = 0, num2 = 0, operation = "add" }) {
  const [number1, setNumber1] = useState(num1);
  const [number2, setNumber2] = useState(num2);
  const [op, setOp] = useState(operation);

  const calculate = (a, b, op) => {
    a = Number(a);
    b = Number(b);
    switch (op) {
      case "add": return a + b;
      case "subtract": return a - b;
      case "multiply": return a * b;
      case "divide": return b == 0 ? "Cannot divide by zero" : a / b;
      default: return "Invalid operation";
    }
  };

  return (
    <div style={{ marginBottom: '15px', padding: '15px', background: '#f9f9f9', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h3 style={{ margin: '0 0 10px', fontSize: '18px' }}>Single Operation</h3>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Number 1"
        style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Number 2"
        style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <select
        value={op}
        onChange={(e) => setOp(e.target.value)}
        style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <p style={{ margin: '5px 0' }}>Result: <span style={{ fontWeight: 'bold' }}>{calculate(number1, number2, op)}</span></p>
    </div>
  );
}

export { Factorial, Calculator, SingleOperationCalculator };