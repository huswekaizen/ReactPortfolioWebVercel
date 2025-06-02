import React from "react";
import { useState, useEffect } from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import Stacks from "./website/stacks";
import Card from "./website/card";
import { BrowserRouter as Router, NavLink } from "react-router-dom";


function Api() {  

    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    const fetchPokemon = () => {
        if (!pokemonName) return; // Don't fetch if input is empty

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
            .then(response => {
                console.log("API Response Status:", response.status); // Debugging log

                if (!response.ok) throw new Error("Pokémon not found");
                return response.json();
            })
            .then(data => {
                console.log("Fetched Data:", data); // Debugging log

                setPokemonData(data);
                setError(null); // Clear any previous error
            })
            .catch(err => {
                console.error("Fetch Error:", err.message);
                setError(err.message);
                setPokemonData(null); // Reset previous Pokémon data
            });
        };
    
        const detailsMap = {
            pikachu: <div><h3>This is Pikachu, a lightning Pokémon!</h3></div>,
            bulbasaur: <div><h3>This is Bulbasaur, a grass-type Pokémon!</h3></div>,
            charmander: <div><h3>This is Charmander, a fire-type Pokémon!</h3></div>,
            squirtle: <div><h3>This is Squirtle, a water-type Pokémon!</h3></div>,
          };

    return (
        <div className="web">
            <div className="crud">
                    <div>
                        <input  type="text" name="" id="" 
                                value={pokemonName}
                                onChange={(e) => {
                                    console.log(`Typed: ${e.target.value}`); 
                                    setPokemonName(e.target.value);
                                }}
                        />
                        <button onClick={fetchPokemon}>Whos your Pokemon?</button>

                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {pokemonData && (
                            <div>
                                <h2>{pokemonData.name.toUpperCase()}</h2>
                                <img src={pokemonData.sprites?.front_default} alt={pokemonData.name} />
                                <div>
                                    {detailsMap[pokemonData.name]}
                                </div>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    );
}

export default Api;