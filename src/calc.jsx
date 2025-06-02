import { useState } from "react"
function Calc() {

    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState();
    const [operators, setOperators] = useState("Addition");
    const [result, setResult] = useState(0);

    function calculate(){

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        switch(operators){
            case "Addition":
                setResult(num1 + num2);
                break;
            case "Subtraction":
                setResult(num1 - num2);
                break;
            case "Multiplication":
                setResult(num1 * num2);
                break;
            case "Division":
                setResult(num1 / num2);
                break;
        }
        
    }

    return (
        <div className="lol">
            <h1>We are Islam Makhachev</h1>

      
            <label htmlFor="firstNum">Enter First Number:</label>
            <input onChange={(e) => setFirstValue(e.target.value)} type="number" name="firstNum" value={firstValue} />

            <label htmlFor="secondNum">Enter Second Number:</label>
            <input onChange={(e) => setSecondValue(e.target.value)} type="number" name="secondNum" value={secondValue} />

            <select onChange={(e) => setOperators(e.target.value)} name="operators" id="" value={operators}>
                <option value="Addition">Addition</option>
                <option value="Subtraction">Subtraction</option>
                <option value="Multiplication">Multiplication</option>
                <option value="Division">Division</option>
            </select>

            <button onClick={calculate}>Calculate</button>

            <h1>{result}</h1>

        </div>
    )
}

export default Calc;