import { useState } from "react"
function Bmi() {

   const [result, setResult] = useState("");
   const [height, setHeight] = useState(0);
   const [weight, setWeight] = useState(0);
    
   

    
    function calculate() {
        setResult(weight / (height * height));
    }

    return (
        <div className="web">
            <h1>We are Alex Pereira</h1>

            <label htmlFor="height">Enter Height: </label>
            <input onChange={(e) => setHeight(e.target.value)} type="number" name="height"/>

            <label htmlFor="weight">Enter Weight: </label>
            <input onChange={(e) => setWeight(e.target.value)} type="number" name="height"/>

            <button onClick={calculate}>Submit</button>

            <h1>{result}</h1>
            
        </div>
    )
}

export default Bmi;