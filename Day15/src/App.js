import React from 'react';
import { DisplayFact } from './fact';
import { Calculator } from './calc';
import { MyFunction, Function2, Function3 } from './mul_fun'
import { TextCase } from './class_comp'

let num = prompt("Enter A number to find factorial")
let num1 = parseInt(prompt("Enter first number to perform calculations :")) 
let num2 = parseInt(prompt("Enter second number to perform calculations :")) 

function App() {
  return (
    <div>
      <DisplayFact number={num} />
      <Calculator num1 ={num1} num2 = {num2}/>
      <MyFunction />
      <Function2 />
      <Function3 />
      <TextCase/>
    </div>
  );
}


export default App;
