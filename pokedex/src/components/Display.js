import React from 'react'
import {useState, useEffect} from 'react'
import Currpokemon from './Currpokemon'
import Prevpokemon from './Prevpokemon'
import Nextpokemon from './Nextpokemon'

export default function Display () {
    const [allPokemon, setAllPokemon] = useState([])
    const [pokedexNumber, setPokedexNumber] = useState(0)
    const [currentPokemon, setCurrentPokemon] = useState({})
    const [nextPokemon, setNextPokemon] = useState({})
    const [prevPokemon, setPrevPokemon] = useState({})
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1200").then((res) => res.json())
        .then((data) => {
            setAllPokemon(data.results)
            setCurrentPokemon(data.results[pokedexNumber])
            setNextPokemon(data.results[pokedexNumber+1])
            if(pokedexNumber > 0){
                setPrevPokemon(data.results[pokedexNumber-1])
            }
        })
    }, [pokedexNumber])

  
    return (
    <div className="display">
        <Prevpokemon pokedexNumber={pokedexNumber} setPokedexNumber={setPokedexNumber} allPokemon={allPokemon} prevPokemon={prevPokemon}/>
        <Currpokemon allPokemon={allPokemon} currentPokemon={currentPokemon} pokedexNumber={pokedexNumber}/>
        <Nextpokemon pokedexNumber={pokedexNumber} setPokedexNumber={setPokedexNumber} nextPokemon={nextPokemon}/>
    </div>
    )
}