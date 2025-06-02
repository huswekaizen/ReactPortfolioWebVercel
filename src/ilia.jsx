import React, {useState, useEffect} from 'react';


let username = window.prompt("Enter your name");
if(username != null && username.trim() !== "") {
    username = username;
}else{
    username = "Islam Makhachev";
}

function Ilia() {

    const [result, setResult] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [selectedRange, setSelectedRange] = useState("100");
    const [resultColor, setResultColor] = useState("black")
    const [number, setNumber] = useState(0);
    const [attempts, setAttempts] = useState(3);
    const [heartsRemaining, setHeartsRemaining] = useState(3);
    

    useEffect(() => {
      const max = parseInt(selectedRange, 10);
      setNumber(Math.floor(Math.random() * max) + 1);
    }, [selectedRange]);
    console.log(number);

    const lives = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1); // Decrease attempts by 1

            // Hide the corresponding heart by reducing the remaining hearts
            setHeartsRemaining(attempts - 1);
        }

        // Check if no lives are left
        if (attempts === 1) {
            setResult(`Game Over! The number was ${number}`);
            setHeartsRemaining(0);
            
        }
    }

    const getResult = () => {
        if(inputValue == null || inputValue == ""){
            setResult("Please enter a number");
            setResultColor("red");
        }else if(inputValue == number){
            setResult("You are Correct!");
            setResultColor("green");
        }else if(inputValue > number){
            setResult("The number is too high");
            setResultColor("orange");
            lives();
        }else if(inputValue < number){           
            setResult("The number is too low");
            setResultColor("orange");
            lives();
        }
    }
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Update state with input value
      };


    const handleSelectChange = (event) => {
        setSelectedRange(event.target.value); // Update selected range value
    };
      
    return (
        <div className="web main">
            <h1>Hello <span id="name">{username}</span></h1>
            <select name="range" className="select" value={selectedRange} onChange={handleSelectChange}>
                <option id="option" value="100">1 - 100</option>
                <option id="option" value="70">1 - 70</option>
                <option id="option" value="50">1 - 50</option>
                <option id="option" value="20">1 - 20</option>
            </select>
            <br />
            <input onChange={handleInputChange} value={inputValue} type="number"
                    placeholder={`Enter a number (1 - ${selectedRange})`}
                    disabled={heartsRemaining === 0}/>
            <br />
            <button type="submit" onClick={getResult} disabled={(heartsRemaining === 0 || result === "You are Correct!")}>Submit</button>
            <h1 className='result' style={{color: resultColor }}>{result}</h1>
            <div className="hearts">
                {Array.from({ length: heartsRemaining }, ( index) => (
                    <h1 key={index} className="heart">❤️</h1>
                ))}
            </div>

            
            {(attempts === 0 || result === "You are Correct!") && (
                <button onClick={() => window.location.reload()}>Restart</button>
            )}
        </div>       
    )
}



export default Ilia
