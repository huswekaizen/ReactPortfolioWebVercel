import { useState } from "react"
import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import Stacks from "./website/stacks";
import Card from "./website/card";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function Random() {
    const [input, setInput] = useState("");
    const [words, setWords] = useState([]);
    const [randomWord, setRandomWord] = useState("");
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleKeyDown = (ass) => {
      if (ass.key === "Enter" && input.trim() !== "") {
        setWords((prevWords) => [...prevWords, input.trim()]);
        setInput(""); // clear input after Enter
      }
    };

    const handleRandomize = () => {
        if (words.length > 0) {
          const randomIndex = Math.floor(Math.random() * words.length);
          setRandomWord(words[randomIndex]);
        }
      };
  
    return (
      <div className="web">
        <div className="main-card">
          <h1>Random Generator</h1>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type word and press Enter"
            style={{ marginBottom: "20px", padding: "8px", width: "100%", color: "black" }}
          />
          <button
            onClick={handleRandomize}
            style={{
                        padding: "6px 10px",
                        backgroundColor: "#ff5555",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}>Randomize
            </button>
            <h1>The winner is: {randomWord}</h1>
  
          <div>
            {words.map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Random;