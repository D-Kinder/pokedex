import Display from "./Display"
import Info from "./Info"
import React from 'react'

export default function Pokedex () {
    return(
    <div className="pokedex">
        <Info />
        <Display />
    </div>
    )
}