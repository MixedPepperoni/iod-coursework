import { useState } from "react";

function Calculator() {
  //state for the 2 nums (num 1 & num 2 & operator)

  const [num1, setNum1] = useState(""); //"" is empty, unless you want to set a default number.
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  // The Calculator 
  const handleCalculations = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Only Enter Valid Numbers.");
      return;
    }

    let calc;
    switch (operator) {
      case "+":
        calc = number1 + number2;
        break;
      case "-":
        calc = number1 - number2;
        break;
      case "*":
        calc = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          setResult("Undefined, Cannot divide by Zero.");
          return;
        }
        calc = number1 / number2;
        break;
      default:
        setResult("Invalid Answer");
        return;
    }

    setResult(calc);
  };

  return (
    <div className="calculator">
      <h2>Capstone Shopping Calculator</h2>
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
      <button onClick={handleCalculations}>Calculate</button>
      {result !== null && <h3>Results:{result}</h3>}
    </div>
  );
}

export default Calculator;

//GOiing back to drawiing baord on this function//
