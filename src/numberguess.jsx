import { useState, useEffect } from "react"
import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import Stacks from "./website/stacks";
import Card from "./website/card";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function NumberGuess() {

    const [range, setRange] = useState(10);
    const [number, setNumber] = useState(() => Math.floor(Math.random() * range) + 1);
    const [guess, setGuess] = useState(0);
    const [answer, setAnswer] = useState("");
    const [clue, setClue] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const [resultColor, setResultColor] = useState("white");

    const [wrong, setWrong] = useState(["L bozo", "Shat ap", "little fooli ye", "r u stupid or what?"]);


    useEffect(() => {
          setNumber(Math.floor(Math.random() * range) + 1);
    }, [range]);
    console.log(number);
    
    const Answer = () => {
        console.log(number);
        if(guess.trim() !== "") {
            if(guess == number) {
            setAnswer("You got it!");
            setIsCorrect(true);
            }else if(guess > number){
                setClue("too high");
                setAnswer(wrong[Math.floor(Math.random() * wrong.length)]);
                setIsCorrect(false);
                setResultColor("red");
            }else if(guess < number){
                setClue("too low");
                setAnswer(wrong[Math.floor(Math.random() * wrong.length)]);
                setIsCorrect(false);
                setResultColor("red");
            }
        }
    }

    return (
        <div className="web">
            <div className="main-card">
                <h1>Guess it hand sanitizer boi</h1>
                <br />
                <h3>1 - 50</h3>
                <br />
            </div>
            <div>
                <div style={{gap: "12px", display: "flex", alignItems: "center", justifyContent: "center"}}>

                    <select style={{color: "black"}} onChange={(e) => setRange(Number(e.target.value))} value={range} name="" id="">
                        <option style={{color: "black"}} value="10">1-10</option>
                        <option style={{color: "black"}} value="20">1-20</option>
                        <option style={{color: "black"}} value="30">1-30</option>
                        <option style={{color: "black"}} value="40">1-40</option>
                        <option style={{color: "black"}} value="50">1-50</option>
                        <option style={{color: "black"}} value="60">1-60</option>
                        <option style={{color: "black"}} value="70">1-70</option>
                        <option style={{color: "black"}} value="80">1-80</option>
                        <option style={{color: "black"}} value="90">1-90</option>
                        <option style={{color: "black"}} value="100">1-100</option>
                    </select>

                    <input style={{ padding: "8px", width: "50%", color: "black" }}
                    placeholder="Enter a number"
                    onChange={(e) => setGuess(e.target.value)}
                    value={guess}
                    type="text" />
                    <button onClick={Answer} style={{
                            padding: "6px 10px",
                            backgroundColor: "#ff5555",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}>Guess</button>
                </div>
                
                <br />
                <h2>{answer}</h2>
                <h3 style={{color: resultColor}}>{clue}</h3>
                {isCorrect && <button style={{
                            padding: "6px 10px",
                            backgroundColor: "#ff5555",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }} onClick={() => {
                            setNumber(Math.floor(Math.random() * range) + 1); 
                            setGuess(0);
                            setAnswer(""); }}>Reset</button>}

            </div>
        </div>
    );
}

export default NumberGuess;