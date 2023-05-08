import React, { useState } from 'react'
import axios from 'axios';


const PokeDex = () => {
    const [pokemonList, setPokemonList] = useState([]);


    const FetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response =>{
            setPokemonList(response.data.results)
        }).catch(err => {
            console.log("Error: ", err);
        })
    }





    return (
        <div className='container text-center'>
            <button onClick={FetchPokemon} className='mb-5'> Fetch Pokemon</button>
            {
                pokemonList.map( (pokemon, i) => {
                    return(
                        <li key = {i}>
                            {pokemon.name}
                        </li>
                    )
                })
            }
        </div>
    )
        }

export default PokeDex