import { useState } from "react"
function Topuria() {

    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(0);
    const [reset, setReset] = useState(0);

    const [text, setText] = useState("");
    
    function Increase() {
        setIncrement(increment + 1);
    }

    function Reset() {
        setIncrement(0);
    }

    function Decrease() {
        setIncrement(increment - 1);
    }

    return (
        <div className="lol">
            <h1>We are Topuria</h1>

            <h1>{increment}</h1>
            <div className="buttons">
                <button onClick={Increase}>+</button>
                <button onClick={Reset}>C</button>
                <button onClick={Decrease}>-</button>
            </div>
        </div>
    )
}

export default Topuria;