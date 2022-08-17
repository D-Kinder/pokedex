import {useEffect, useState} from 'react'
import GRASS from "../images/GRASS.png"

export default function Currpokemon ({allPokemon, currentPokemon, pokedexNumber}) {
    const [image, setImage] = useState("")
    const [types, setTypes] = useState([])
    const [abilities, setAbilities] = useState([])
    const [pokemon, setPokemon] = useState("")
    const [clicked, setClicked] = useState(false)
   const [baseHP, setBaseHP] = useState(0)
   const [baseAtt, setBaseAtt] = useState(0)
   const [baseDef, setBaseDef] = useState(0)
   const [baseSpAtt, setBaseSpAtt] = useState(0)
   const [baseSpDef, setBaseSpDef] = useState(0)
   const [baseSpd, setBaseSpd] = useState(0)
   const [shinyImage, setShinyImage] = useState("")
   const [shiny, setShiny] = useState(false)
   
    useEffect(() => {
        fetch(currentPokemon.url).then((res) => res.json())
        .then((information) => {
            setImage(information.sprites.other['official-artwork'].front_default)
            setShinyImage(information.sprites.front_shiny)
            
            setPokemon(information.name.toUpperCase())
            
            const types = information.types.map((type) => {
                return type.type.name.toUpperCase()
            }).join(" ")
            setTypes(types)

            const abilities = information.abilities.map((ability) => {
                return ability.ability.name.toUpperCase()
            }).join(" ")
            setAbilities(abilities)

            setBaseHP(information.stats[0].base_stat)
            setBaseAtt(information.stats[1].base_stat)
            setBaseDef(information.stats[2].base_stat)
            setBaseSpAtt(information.stats[3].base_stat)
            setBaseSpDef(information.stats[4].base_stat)
            setBaseSpd(information.stats[5].base_stat)
            
        })
    }, [currentPokemon])
    
    const baseStatTotal = baseHP + baseAtt + baseDef + baseSpAtt + baseSpDef + baseSpd
   
    function onClick () {
        setClicked((current) => {
            return !current
        })
    }

    function toggleShiny () {
        setShiny((current) => {
            return !current
        })
    }
    
    return (
        <div className="curr-pokemon">
            <div className="image" onClick={onClick}>
                {shiny === true ? <img className="poke-image" src={shinyImage}></img> : clicked === false ? <img className="poke-image" src={image} alt="pokemon"></img> :
                    <div className="stats-page">
                        <img className="mini-poke-image" src={image}></img>
                        <p>Abilities</p>
                        <p className="abilities">{abilities}</p>
                        <p>HP: {baseHP}</p>
                        <p>Attack: {baseAtt}</p>
                        <p>Defence: {baseDef}</p>
                        <p>Special Attack: {baseSpAtt}</p>
                        <p>Special Defense: {baseSpDef}</p>
                        <p>Speed: {baseSpd}</p>
                        <p>Base Stat Total: {baseStatTotal}</p>
                    </div>
}
            </div>
            <div className="name">
            <p>{pokemon}</p>
            <button onClick={toggleShiny}>Shiny</button>
            </div>
            <div  className="types">
            <img src={types}></img>
            </div>
            <div className="count">
            <p id="count-display">{pokedexNumber+1}/1153</p>
            </div>
        </div>
    )
}