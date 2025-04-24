import { useState } from "react";

function Calculator() {
  // State for the 2numbers & operator
  const [num1, setNum1] = useState(""); //Make sure these are empty unless you want to set a default
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  // The calculation
  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Enter valid numbers.");
      return;
    }

    let calculation;
    switch (operator) { //Pretty much alost using old code from mod5 and using it. T
      case "+":
        calculation = number1 + number2;
        break;
      case "-":
        calculation = number1 - number2;
        break;
      case "*":
        calculation = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          setResult("Can't divide by zero");
          return;
        }
        calculation = number1 / number2;
        break;
      default:
        setResult("Invalid");
        return;
    } //there is alot of copying code in this module.

    setResult(calculation);
  };

  return (
    <div className="calculator"> 
      <h2>Simple Calculator</h2>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="1st number?"
        />
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="2nd number?"
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default Calculator;
