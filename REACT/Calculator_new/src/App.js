import "./App.css";
import { useState } from "react";

function App() {
  const [ip1, setip1] = useState(0); //first number
  const [ip2, setip2] = useState(0); //second number
  const [output, setoutput] = useState(""); //output

  const handleInput1Change = (e) => setip1(e.target.value); // first input number
  const handleInput2Change = (e) => setip2(e.target.value); //second input number
  const handleInputReset = () => {
    setip1(0)
    setip2(0)
    setoutput("")
  }

  //operations input
  const handleInputOpsChange = (e) => {
    console.log(e.currentTarget.name); //test console log

    let operator = e.currentTarget.name;
    let result = 0;
    let n1 = parseInt(ip1);
    let n2 = parseInt(ip2);

    switch (operator) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "x":
        result = n1 * n2;
        break;
      case "/":
        result = n1 / n2;
        break;

      default:
        console.log("default");
        break;
    }
    console.log(result);
    console.log(operator);

    let op = `${ip1} ${operator} ${ip2} = ${result}`;

    console.log(op);
    setoutput(op);
  }; //more than one statements

  return (
    <div className="App">
      <header className="App-header">
        INPUT1: <input onChange={handleInput1Change} type="number" value = {ip1} /> <br />
        INPUT2:<input onChange={handleInput2Change} type="number" value = {ip2} /> <br />
        <br />
        OUTPUT <p>{JSON.stringify(output)}</p> <br />

        <button onClick={handleInputOpsChange} name="+">{" "}+{" "}</button>
        <button onClick={handleInputOpsChange} name="-">{" "}-{" "} </button>
        <button onClick={handleInputOpsChange} name="x">{" "}x{" "}</button>
        <button onClick={handleInputOpsChange} name="/">{" "}/{" "} </button>

        <button onClick={handleInputReset}> Reset </button>

      </header>
    </div>
  );
}

export default App;