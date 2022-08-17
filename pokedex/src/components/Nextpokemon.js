import { useEffect, useState } from "react"
import right from "../images/rightArr.png"

export default function Nextpokemon ({pokedexNumber, setPokedexNumber, nextPokemon}) {
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch(nextPokemon.url).then((res) => res.json())
        .then((information) => {
            setImage(information.sprites.other['official-artwork'].front_default)
        })
    })

    function incrementPokedex () {
        if(pokedexNumber === 1154) return
        setPokedexNumber((current) => {
            return current + 1
        })
    }
    return (
        <div className="next-pokemon">
            {pokedexNumber < 1154 ? <img src={image}></img> : ""}
            <img src={right} alt="right" onClick={incrementPokedex}></img>
        </div>
    )
}