import React from 'react'
import './css/PokedexContainer.css'
import PokemonTile from './PokemonTile'
 
 export default function PokedexContainer() {
   return (
     <>
        <div className="pokedexContainer__content">
            <div className="pokedexContainer__title">Pokedex</div>
            <div className="pokedexContainer__pokemonTileContainer">
                <PokemonTile />
                <PokemonTile />
                <PokemonTile />
                <PokemonTile />
            </div>
        </div>
     </>
   )
 }
 