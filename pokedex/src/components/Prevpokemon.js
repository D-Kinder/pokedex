import left from "../images/leftArr.png"
import {useState, useEffect} from 'react'

export default function Prevpokemon ({pokedexNumber, setPokedexNumber, allPokemon, prevPokemon}) {
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch(prevPokemon.url).then((res) => res.json())
        .then((information) => {
            setImage(information.sprites.other['official-artwork'].front_default)
        })
    })

    function decrementPokedex () {
        if(pokedexNumber ===0) return
        setPokedexNumber((current) => {
            return current-1
        })
    }

    return (
        <div className="prev-pokemon">
            {pokedexNumber > 0 ? <img src={image}></img> : ""}
            <img src={left} alt="arrow" onClick={decrementPokedex}></img>
        </div>
    )
}